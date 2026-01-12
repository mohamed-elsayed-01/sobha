"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, User } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerFormSchema,
  type RegisterFormValues,
} from "@/lib/schemas/landing";
import { useState } from "react";
import { submitLeadToCRM } from "@/lib/apis/SubmitLead";

const FormFooter = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      preferredUnit: "",
      budget: "",
    },
  });

const onSubmit = async (data: RegisterFormValues) => {
  console.log(data);
  try {
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const response = await submitLeadToCRM(data);

    console.log("CRM Response:", response);

    if (response.success) {
      setSuccessMessage("Your registration was successful! We will contact you shortly.");
      reset();
    } else {
      setErrorMessage("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("CRM Error:", error);
    setErrorMessage("Failed to submit. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div
      id="register"
      className="py-[40px] lg:py-[80px] px-[20px] lg:px-[80px] bg-[#17173B]"
    >
      <h3 className="capitalize text-white font-dm-serif tracking-[-1.92px] font-normal text-[32px] lg:text-[48px] text-center">
        Register for Priority Access Before Launch
      </h3>
      <div className="mt-[32px] p-[20px] lg:p-[48px]">
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-6 w-full"
        >
          <div className="space-y-2 col-span-1 lg:col-span-2">
            <Label
              htmlFor="full-name-footer"
              className="text-[#EEE9E6] font-poppins text-sm font-medium leading-5"
            >
              Full Name <span className="text-[#D92D20]">*</span>
            </Label>
            <div className="flex items-center gap-2 text-white rounded-[4px] bg-[#EEE9E6]/6 px-4 py-3 backdrop-blur-[20px] h-full max-h-[48px] w-full">
              <User className="min-size-5" />
              <input
                {...register("fullName")}
                placeholder="Full Name"
                type="text"
                id="full-name-footer"
                className="placeholder:text-white border-none w-full focus-visible:ring-0 outline-none px-0! py-0! gap-0 shadow-none bg-transparent"
              />
            </div>
            {errors.fullName && (
              <span className="text-white/70 text-xs">
                {errors.fullName.message}
              </span>
            )}
          </div>
          <div className="space-y-2 col-span-1">
            <Label
              htmlFor="phone-number"
              className="text-[#EEE9E6] font-poppins text-sm font-medium leading-5"
            >
              Phone Number <span className="text-[#D92D20]">*</span>
            </Label>

            <div className="flex items-center gap-2 text-white rounded-[4px] bg-[#EEE9E6]/6 px-4 py-3 backdrop-blur-[20px] h-full max-h-[48px]">
              {/* ✅ React-phone-number-input */}
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    id="phone-number"
                    defaultCountry="AE"
                    placeholder="000 000 0000"
                    className="text-black w-full
        [&_.PhoneInputInput]:bg-transparent
        [&_.PhoneInputInput]:border-none
        [&_.PhoneInputInput]:outline-none
        [&_.PhoneInputInput]:placeholder:text-white
      "
                  />
                )}
              />
            </div>

            {errors.phoneNumber && (
              <span className="text-white/70 text-xs">
                {errors.phoneNumber.message}
              </span>
            )}
          </div>
          <div className="space-y-2 col-span-1">
            <Label
              htmlFor="email-footer"
              className="text-[#EEE9E6] font-poppins text-sm font-medium leading-5"
            >
              Email <span className="text-[#D92D20]">*</span>
            </Label>
            <div className="flex items-center gap-2 text-white rounded-[4px] bg-[#EEE9E6]/6 px-4 py-3 backdrop-blur-[20px] h-full max-h-[48px] w-full">
              <Mail className="min-size-5" />
              <input
                {...register("email")}
                placeholder="Email"
                type="email"
                id="email-footer"
                className="placeholder:text-white border-none w-full focus-visible:ring-0 outline-none px-0! py-0! gap-0 shadow-none bg-transparent"
              />
            </div>
            {errors.email && (
              <span className="text-white/70 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="space-y-2 col-span-1">
            <Label
              htmlFor="preferred-unit-footer"
              className="text-[#EEE9E6] font-poppins text-sm font-medium leading-5"
            >
              Preferred Unit <span className="text-[#D92D20]">*</span>
            </Label>
            <div className="flex items-center gap-2 text-white rounded-[4px] bg-[#EEE9E6]/6 px-4 py-3 backdrop-blur-[20px] h-full max-h-[48px] w-full">
              <Controller
                control={control}
                name="preferredUnit"
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="border-none py-0! px-0! gap-0! h-auto! [&_svg]:text-white! [&_svg]:ml-3 w-full shadow-none">
                      <SelectValue
                        placeholder="Select unit"
                        className="border-none outline-none"
                      />
                    </SelectTrigger>

                    <SelectContent className="w-full left-0">
                      <SelectItem value="21935">1BR</SelectItem>
                      <SelectItem value="21936">2BR</SelectItem>
                      <SelectItem value="21937">3BR</SelectItem>
                      <SelectItem value="21938">4BR Penthouse</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            {errors.preferredUnit && (
              <span className="text-white/70 text-xs">
                {errors.preferredUnit.message}
              </span>
            )}
          </div>
          <div className="space-y-2 col-span-1">
            <Label
              htmlFor="budget-footer"
              className="text-[#EEE9E6] font-poppins text-sm font-medium leading-5"
            >
              Budget (optional)
            </Label>
            <div className="flex items-center gap-2 text-white rounded-[4px] bg-[#EEE9E6]/6 px-4 py-3 backdrop-blur-[20px] h-full max-h-[48px] w-full">
              <Controller
                control={control}
                name="budget"
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="border-none py-0! px-0! gap-0! h-auto! [&_svg]:text-white! [&_svg]:ml-3 w-full shadow-none data-placeholder:text-white! bg-transparent">
                      <SelectValue
                        placeholder="Select budget"
                        className="border-none outline-none"
                      />
                    </SelectTrigger>
                    <SelectContent className="w-full left-0">
                      <SelectItem value="1M - 2M">1M - 2M</SelectItem>
                      <SelectItem value="2M - 3M">2M - 3M</SelectItem>
                      <SelectItem value="3M - 4M">3M - 4M</SelectItem>
                      <SelectItem value="4M - 5M">4M - 5M</SelectItem>
                      <SelectItem value="100k">5M+</SelectItem>{" "}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            {errors.budget && (
              <span className="text-white/10 text-xs">
                {errors.budget.message}
              </span>
            )}
          </div>
          <div className="flex justify-center lg:justify-end col-span-1 lg:col-span-2">
            <Button
              type="submit"
              disabled={loading}
              className="col-span-2 text-base cursor-pointer font-normal leading-5 font-poppins text-white py-4 px-7 bg-[#E0592A] hover:bg-[#E0592A] rounded-full mt-[12px] h-auto opacity-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit & Get Priority Access"}
            </Button>
          </div>


        </form>

                  {successMessage && (
  <p className="text-green-400 text-sm mt-3 text-center">
    {successMessage}
  </p>
)}

{errorMessage && (
  <p className="text-red-400 text-sm mt-3 text-center">
    {errorMessage}
  </p>
)}
      </div>
    </div>
  );
};
export default FormFooter;
