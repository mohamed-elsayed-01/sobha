export const submitLeadToCRM = async (data) => {

    // ✅ Split full name inside the function
  const parts = (data.fullName || "").trim().split(" ");

  const firstName =
    parts.length === 1 ? parts[0] : parts[0] || "NA";

  const lastName =
    parts.length === 1 ? "NA" : parts.slice(1).join(" ") || "NA";

  // -------------------------------------------------------

    // ✅ Parse budget inside the function
  const parseBudgetRange = (budget) => {
    if (!budget) return { from: 0, to: 0 };

    // Handle "5M+"
    if (budget === "5M+") {
      return { from: 5000000, to: 6000000 };
    }

    // Handle "1M - 2M", "2M - 3M", etc.
    const match = budget.match(/(\d)M\s*-\s*(\d)M/);
    if (match) {
      const from = Number(match[1]) * 1000000;
      const to = Number(match[2]) * 1000000;
      return { from, to };
    }

    return { from: 0, to: 0 };
  };

  const { from: budgetFrom, to: budgetTo } = parseBudgetRange(data.budget);

  // -------------------------------------------------------

  // ✅ Get current URL
  const currentUrl = window?.location?.href || "";

  // ✅ Define campaigns
  const campaigns = [
    {
      id: "3286",
      url: "https://psinv.net/services/bashayer-apartment-alhudayriat/?utm_source=google&utm_medium=google+search&utm_campaign=metwally%3A+Bashayer+Apartments+-+Company+-+Search++&utm_id=3286&utm_term=alhudayriat",
      name: "metwally: Bashayer Apartments - Company - Search",
      rotation: "AUH_Hudayriat_Bashayer_Apartments_Nov",
      platform: "Google Ads",
      mediaType: "165269",
      mediaName: "128455",
    },
  ];

  // ✅ Match current URL with campaign
  const activeCampaign = campaigns.find((c) => currentUrl.startsWith(c.url));

  // ✅ Build campaign info text
  const campaignInfo = activeCampaign
    ? `Platform: ${activeCampaign.platform}
Campaign Name: ${activeCampaign.name}
Rotation: ${activeCampaign.rotation}

Link:
${activeCampaign.url}`
    : "";

  const userInfo = `Submitted by:
- Name: ${firstName} ${lastName}
- Email: ${data.email}
- phoneNumber: ${data.phoneNumber}
- Budget: ${data.budget}
${campaignInfo ? campaignInfo + "\n" : ""}`;

  // ✅ Default / fallback campaign values
  const campaignId = activeCampaign?.id || "";
  const mediaType = activeCampaign?.mediaType || "165232";
  const mediaName = activeCampaign?.mediaName || "128461";

  // ✅ CRM Payload
  const payload = {
    TitleID: "129932",
    FirstName: firstName,
    FamilyName: lastName,
    MobilePhone: data.phoneNumber,
    Email: data.email,
    NationalityID: "65946",
    LanguageID: 115915,
    CompanyID: "",
    Remarks: `\n\n${userInfo}`,
    RequirementType: 91212,
    ContactType: 3,
    CountryID: 65946,
    StateID: "",
    CityID: "",
    DistrictID: "",
    CommunityID: "",
    SubCommunityID: "",
    PropertyID: "25477",
    UnitType: "19",
    MethodOfContact: 115747,
    MediaType: mediaType,
    MediaName: mediaName,
    DeactivateNotification: "",
    Bedroom: data.preferredUnit,
    Bathroom: "21935",
    Budget: budgetFrom,
    Budget2: budgetTo,
    AreaFrom: 0,
    AreaTo: 10000,
    RequirementCountryID: "",
    ExistingClient: "",
    CompaignSource: "",
    CompaignMedium: "",
    Company: "",
    NumberOfEmployee: "",
    LeadStageId: "",
    LeadRatingId: 454,
    UnitId: "",
    ReferredToID: 3458,
    ReferredByID: 3458,
    IsBulkUpload: "",
    ActivityAssignedTo: 3458,
    ActivityDate: "",
    ActivityTypeId: "167234",
    ActivitySubject: "Email Inquiry Copy",
    ActivityRemarks: `\n\n${userInfo}`,
    IsForAutoRotation: false,
    PropertyCampaignId: campaignId,
    contactClassId: 68,
    google_gclid: "",
    AdName: "",
    AdSetName: "",
    channel: "Default",
  };

  try {
    const response = await fetch(
      "https://api.portal.psi-crm.com/leads?APIKEY=160c2879807f44981a4f85fe5751272f4bf57785fb6f39f80330ab3d1604e050787d7abff8c5101a",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("API Error:", data);
      throw new Error(data?.message || "Submission failed");
    }

    console.log("✅ API Response:", data);
    return { success: true, data };
  } catch (error) {
    console.error("API Error:", error.message);
    return { success: false, error: error.message };
  }
};
