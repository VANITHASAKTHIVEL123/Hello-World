export class Loan {
    EnvelopeHeader: EnvelopeHeader =new EnvelopeHeader();
    TransactionHeader: TransactionHeader=new TransactionHeader();
    TransactionProcessingInfo: TransactionProcessingInfo=new TransactionProcessingInfo();
    FileIdentification: FileIdentification=new FileIdentification();
    TopofForm: TopofForm=new TopofForm();
    MortgageTypeandTerms: MortgageTypeandTerms=new MortgageTypeandTerms();
    PropertyInformation: PropertyInformation=new PropertyInformation();
    PropertyAddressInformation: PropertyAddressInformation=new PropertyAddressInformation();
    PurposeofLoan: PurposeofLoan=new PurposeofLoan();
    TitleHolder: TitleHolder[] ;
    ConstructionorRefinanceData: ConstructionorRefinanceData=new ConstructionorRefinanceData();
    DownPayment: DownPayment=new DownPayment();
    ApplicantsData: ApplicantsDatum[];
    Secondary: Secondary=new Secondary();
    Forallassettypes: Forallassettypes=new Forallassettypes();
    LifeInsurancecs: LifeInsurancecs=new LifeInsurancecs();
    Automobiles: Automobiles=new Automobiles();
    Alimony: Alimony=new Alimony();
    Alias: Alias=new Alias();
    UndrawnHELOCandIPCs: UndrawnHELOCandIPCs=new UndrawnHELOCandIPCs();
    DetailsofTransaction: DetailsofTransaction=new DetailsofTransaction();
    OtherCredits: OtherCredit[];
    DeclarationExplanations: DeclarationExplanations=new DeclarationExplanations();
    AcknowledgmentandAgreement: AcknowledgmentandAgreement=new AcknowledgmentandAgreement();
    LoanOriginatorInformation: LoanOriginatorInformation=new LoanOriginatorInformation();
    FannieMaeTransmittalData: FannieMaeTransmittalData=new FannieMaeTransmittalData();
    AdditionalDataSegment: AdditionalDataSegment[];
    Score: Score;
    LoanCharacteristicsforEligibility: LoanCharacteristicsforEligibility=new LoanCharacteristicsforEligibility();
    ProductIdentification: ProductIdentification=new ProductIdentification();
    ProductCharacteristics: ProductCharacteristics=new ProductCharacteristics();
    ARM: ARM=new ARM();
    PaymentAdjustmentOccurrences: PaymentAdjustmentOccurrences=new PaymentAdjustmentOccurrences();
    RateAdjustmentOccurrences: RateAdjustmentOccurrences=new RateAdjustmentOccurrences();
    BuydownData: BuydownData=new BuydownData();
    LenderData: LenderData=new LenderData();
    VALoans: VALoans=new VALoans();
    GoB: GoB=new GoB();
    VALoansOnlyc: VALoansOnlyc=new VALoansOnlyc();
    VALoansOnly: VALoansOnly=new VALoansOnly();
    CreditData: CreditData=new CreditData();
    CommunityLendingLoans: CommunityLendingLoans=new CommunityLendingLoans();
    TransactionTrailer: TransactionTrailer=new TransactionTrailer();
    EnvelopeTrailer: EnvelopeTrailer=new EnvelopeTrailer ();
  }
  
  export class EnvelopeTrailer {
    EnvelopeControlNumber: string;
    SessionId: string;
  }
  
  export class TransactionTrailer {
    TransactionControlNumber: string;
    SessionId: string;
  }
  
  export class CommunityLendingLoans {
    County: string;
    CommunityLendingProduct: string;
    CommunitySecondsRepaymentStructure: string;
    FannieNeighborsEligible: string;
    CommunitySeconds: string;
    HUDMedianIncome?: any;
    IncomeLimitAdjustmentFactors?: any;
    CommunityLendingIncomeLimit?: any;
    SessionId: string;
  }
  
  export class CreditData {
    ApplicantSocialSecurityNumber: string;
    CAIVRSIdentifier: string;
    BorrowerCreditRating: string;
    BankruptcyCount: string;
    Foreclosure: string;
    FirstTimeHomebuyerCounselType: string;
    SessionId: string;
  }
  
  export class VALoansOnly {
    ApplicantSocialSecurityNumber: string;
    TotalTax?: any;
    StateTax?: any;
    LocalIncomeTax?: any;
    SocialSecurityTax?: any;
    TotalNonTaxableIncomePrimary?: any;
    TotalNonTaxableIncomeOther?: any;
    TotalTaxableIncomePrimary?: any;
    TotalTaxableIncomeOther: string;
    SessionId: string;
  }
  
  export class VALoansOnlyc {
    CoBorrowerMarriedtoPrimaryBorrower: string;
    EntitlementAmount: string;
    MonthlyMaintenance?: any;
    MonthlyUtilities?: any;
    FundingFee: string;
    SessionId: string;
  }
  
  export class GoB {
    FHASectionoftheActCodes: string;
    AllowableRepairs: string;
    MIPUpfront: string;
    MIPRefundAmount?: any;
    FirstRenewalRate: string;
    Reservedforfutureuse: string;
    SessionId: string;
  }
  
  export class VALoans {
    EnergyEfficientNewHome: string;
    MCC?: any;
    SellerConcessions?: any;
    BorrowerTotalClosingCostsFees?: any;
    BorrowerTotalClosingCostsPoints?: any;
    SellerTotalClosingCostsFees?: any;
    SellerTotalClosingCostsPoints?: any;
    OtherTotalClosingCostsFees?: any;
    OtherTotalClosingCostsPoints?: any;
    TypeofRefinance: string;
    PropertyCounty: string;
    SessionId: string;
  }
  
  export class LenderData {
    FHALenderIdentifier?: any;
    FHASponsorIdentifier?: any;
    SponsoredOriginatorEIN?: any;
    Filler: string;
    SessionId: string;
  }
  
  export class BuydownData {
    BuydownFrequency?: any;
    BuydownDuration?: any;
    IncreaseRate?: any;
    FundingCode: string;
    BuydownBaseDateCode: string;
    BuydownTypeIndicator: string;
    SessionId: string;
  }
  
  export class RateAdjustmentOccurrences {
    RateAdjustmentPeriodNumber?: any;
    RateAdjustmentDuration?: any;
    RateAdjustmentFrequency: string;
    RateAdjustmentCalculationMethodCode: string;
    RateAdjustmentPercent?: any;
    RateAdjustmentCap?: any;
    MonthsToFirstRateAdjustment?: any;
    SessionId: string;
  }
  
  export class PaymentAdjustmentOccurrences {
    PaymentAdjustmentPeriodNumber: string;
    PaymentAdjustmentDuration: string;
    PaymentAdjustmentFrequency: string;
    PaymentAdjustmentTypeCode: string;
    PaymentAdjustmentPercent?: any;
    PaymentAdjustmentAmount?: any;
    PaymentAdjustmentPercentCap: number;
    PaymentAdjustmentAmountCap?: any;
    MonthsToFirstPaymentAdjustment?: any;
    SessionId: string;
  }
  
  export class ARM {
    ARMIndexValue?: any;
    IndexType: string;
    ARMIndexMargin?: any;
    ARMQualifyingRate?: any;
    SessionId: string;
  }
  
  export class ProductCharacteristics {
    MortgageTerm: string;
    AssumableLoanIndicator: string;
    PaymentFrequencyCode: string;
    PrepaymentPenaltyIndicator: string;
    PrepaymentRestrictedIndicator: string;
    RepaymentTypeCode: string;
    SessionId: string;
  }
  
  export class ProductIdentification {
    ProductDescription: string;
    ProductCode: string;
    ProductPlanNumber: string;
    SessionId: string;
  }
  
  export class LoanCharacteristicsforEligibility {
    LienTypeCode: string;
    LoanDocumentationTypeCode: string;
    SubjectPropertyTypeCode: string;
    ProjectClassificationCode: string;
    NegativeAmortizationLimitPercent?: any;
    BalloonIndicator: string;
    Filler: string;
    HomebuyerEducationCompletionIndicator: string;
    MaximumLifetimeRateIncrease: number;
    PaymentAdjustmentLifePercentCap?: any;
    PaymentAdjustmentLifeAmountCap?: any;
    EscrowWaiverIndicator: string;
    ScheduledLoanClosingDate: string;
    ScheduledFirstPaymentDate: string;
    MICoveragePercent: number;
    MIInsurerCode: string;
    APRSpread: number;
    HOEPA: string;
    PreApproval: string;
    SessionId: string;
  }
  
  export class Score {
    ScoreID: string;
    score: string;
    ScoreDate?: any;
    SessionId: string;
  }
  
  export class AdditionalDataSegment {
    LoanOriginatorID: string;
    LoanOriginatorIDValue: string;
    LoanOriginationCompanyID: string;
    LoanOriginationCompanyIDValue: string;
    ServiceProviderName: string;
    ServiceProviderReferenceNumber: string;
    SupervisoryAppraiserLicenseNumber: string;
    SupervisoryAppraiserLicenseNumberValue: string;
    DocFileID: string;
    DocFileIDValue: string;
    FIPSCodeIdentifier: string;
    FIPSCodeIdentifierValue: string;
    NumberofFinancedProperties: string;
    NumberofFinancedPropertiesValue: string;
    HMDAGenderType: string;
    HMDAGenderTypeValue: string;
    HMDAGenderRefusalIndicator: string;
    HMDAGenderRefusalIndicatorValue: string;
    HMDAEthnicityType: string;
    HMDAEthnicityTypeValue: string;
    HMDAEthnicityOriginType: string;
    HMDAEthnicityOriginTypeValue: string;
    HMDAEthnicityOriginTypeOtherDescription: string;
    HMDAEthnicityOriginTypeOtherDescriptionValue: string;
    HMDAEthnicityRefusalIndicator?: any;
    HMDAEthnicityRefusalIndicatorValue?: any;
    HMDARaceType: string;
    HMDARaceTypeValue: string;
    HMDARaceDesignationType: string;
    HMDARaceDesignationTypeValue: string;
    HMDARaceDesignationOtherAsianDescription: string;
    HMDARaceDesignationOtherAsianDescriptionValue: string;
    HMDARaceDesignationOtherPacificIslanderDescription: string;
    HMDARaceDesignationOtherPacificIslanderDescriptionValue: string;
    HMDARaceTypeAdditionalDescription: string;
    HMDARaceTypeAdditionalDescriptionValue: string;
    SurnameIndicator: string;
    SurnameIndicatorValue: string;
    ApplicationTakenMethodType: string;
    ApplicationTakenMethodTypeValue: string;
    SessionId: string;
  }
  
  export class FannieMaeTransmittalData {
    BelowMarketSubordinateFinancingIndicator: string;
    CurrentFirstMortgageHolderType: string;
    PropertyAppraisedValueAmount: number;
    BuydownRatePercent?: any;
    ActualvsEstimatedAppraisedValueIndicator: string;
    EstimatedAppraisedValueIndicator?: any;
    AppraiserName: string;
    AppraiserCompany: string;
    AppraiserLicenseNumber: string;
    AppraiserLicenseStateCode: string;
    SessionId: string;
  }
  
  export class LoanOriginatorInformation {
    ApplicationTakenMethodType: string;
    InterviewersName: string;
    InterviewerApplicationSignedDate?: any;
    InterviewersTelephoneNumber: string;
    InterviewersEmployerName: string;
    InterviewersEmployerStreetAddress: string;
    InterviewersEmployerCity: string;
    InterviewersEmployerState: string;
    InterviewersEmployerPostalCode?: any;
    SessionId: string;
  }
  
  export class AcknowledgmentandAgreement {
    ApplicantSocialSecurityNumber: string;
    SignatureDate?: any;
    SessionId: string;
  }
  
  export class DeclarationExplanations {
    ApplicantSocialSecurityNumber: string;
    DeclarationTypeCode: string;
    DeclarationExplanation: string;
    SessionId: string;
  }
  
  export class OtherCredit {
    OtherCreditTypeCode: string;
    AmountofOtherCredit: number;
    SessionId: string;
  }
  
  export class DetailsofTransaction {
    Purchaseprice: string;
    Alterations: number;
    Land: number;
    Refinancep: string;
    Estimatedprepaiditems: number;
    Estimatedclosingcosts: number;
    FundingFee: number;
    Discount: number;
    Subordinatefinancing: number;
    ApplicantsclosingcostspaidbySeller: number;
    FundingFeefinanced: number;
    SessionId: string;
  }
  
  export class UndrawnHELOCandIPCs {
    ApplicantSocialSecurityNumber: string;
    SummaryAmountTypeCode: string;
    Amount?: any;
    SessionId: string;
  }
  
  export class Alias {
    ApplicantSocialSecurityNumber: string;
    AlternateFirstName: string;
    AlternateMiddleName: string;
    AlternateLastName: string;
    ReservedforFutureUse: string;
    SessionId: string;
  }
  
  export class Alimony {
    ApplicantSocialSecurityNumber: string;
    ExpenseTypeCode: string;
    MonthlyPaymentAmount?: any;
    MonthsLefttoPay: string;
    ChildSupport: string;
    SessionId: string;
  }
  
  export class Automobiles {
    ApplicantSocialSecurityNumber: string;
    AutomobileMake: string;
    AutomobileYear: string;
    Cash?: any;
    SessionId: string;
  }
  
  export class LifeInsurancecs {
    ApplicantSocialSecurityNumber: string;
    Acctno: string;
    LifeInsuranceCashorMarketValue?: any;
    LifeinsuranceFaceAmount?: any;
    SessionId: string;
  }
  
  export class Forallassettypes {
    ApplicantSocialSecurityNumber: string;
    Cashdeposittowardpurchaseheldby: string;
    CashorMarketValue?: any;
    SessionId: string;
  }
  
  export class Secondary {
    ApplicantSocialSecurityNumber: string;
    EmployerName: string;
    EmployerStreetAddress: string;
    EmployerCity: string;
    EmployerState: string;
    EmployerZipCode?: any;
    EmployerZipCodePlusFour?: any;
    SelfEmployed: string;
    CurrentEmploymentFlag: string;
    FromDate?: any;
    ToDate?: any;
    MonthlyIncome?: any;
    Position: string;
    BusinessPhone?: any;
    SessionId: string;
  }
  
  export class ApplicantsDatum {
    CoApplicantIndicator: string;
    ApplicantSocialSecurityNumber: string;
    ApplicantFirstName: string;
    ApplicantMiddleName: string;
    ApplicantLastName: string;
    ApplicantGeneration: string;
    HomePhone: string;
    Age?: any;
    YrsSchool: number;
    MaritalStatus: string;
    Dependentsno: number;
    CompletedJointly: string;
    CrossReferenceNumber: number;
    DateofBirth: string;
    EmailAddress: string;
    SessionId: string;
    Income: Income[];
    ApplicantsAddress: ApplicantsAddress[];
    DependentsAge: DependentsAge[];
    PrimaryCurrentEmployers: PrimaryCurrentEmployer[];
    ProposedHousingExpense: ProposedHousingExpense[];
    Assets: Asset[];
    RealEstateOwned: RealEstateOwned[];
    Liabilities: Liability[];
    Declarations: Declaration[];
    InformationforGovernmentMonitoringPurposes: InformationforGovernmentMonitoringPurpose[];
    GovermentMonitoranashar?: any;
  }
  
  export class InformationforGovernmentMonitoringPurpose {
    ApplicantSocialSecurityNumber: string;
    RaceNationalOriginRefusalIndicator: string;
    Ethnicity: string;
    Filler: string;
    Sex: string;
    SessionId: string;
  }
  
  export class Declaration {
    ApplicantSocialSecurityNumber: string;
    OutstandingJudgementsIndicator: string;
    BankruptcyIndicator: string;
    PropertyForeclosedPastSevenYearsIndicato: string;
    PartyToLawsuitIndicato: string;
    LoanForeclosureOrJudgementIndicator: string;
    PresentlyDelinquentIndicator: string;
    AlimonyChildSupportObligationIndicator: string;
    BorrowedDownPaymentIndicato: string;
    CoMakerEndorserOfNoteIndicator: string;
    CitizenshipResidencyType: string;
    IntentToOccupyType: string;
    HomeownerPastThreeYearsType: string;
    PriorPropertyUsageType: string;
    PriorPropertyTitleType: string;
    SessionId: string;
  }
  
  export class Liability {
    ApplicantSocialSecurityNumber: string;
    LiabilityType: string;
    CreditorName: string;
    CreditorStreetAddress: string;
    CreditorCity: string;
    CreditorState: string;
    CreditorZipCode?: any;
    CreditorZipCodePlusFour?: any;
    Acctno: string;
    MonthlyPaymentAmount: number;
    MonthsLefttoPay?: any;
    UnpaidBalance: number;
    Liabilitywillbepaidpriortoclosing: string;
    REOAssetID?: any;
    ResubordinatedIndicator: string;
    OmittedIndicator: string;
    SubjectPropertyIndicator: string;
    RentalPropertyIndicator: string;
    SessionId: string;
  }
  
  export class RealEstateOwned {
    ApplicantSocialSecurityNumber: string;
    PropertyStreetAddress: string;
    PropertyCity: string;
    PropertyState: string;
    PropertyZipCode: number;
    PropertyZipCodePlusFour?: any;
    PropertyDisposition: string;
    TypeofProperty: string;
    PresentMarketValue: number;
    AmountofMortgage: number;
    GrossRentalIncome: number;
    MortgagePayments: number;
    Insurance: number;
    NetRentalIncome: string;
    CurrentResidenceIndicator: string;
    SubjectPropertyIndicator: string;
    REOAssetID: string;
    ReservedforFutureUse: string;
    SessionId: string;
  }
  
  export class Asset {
    ApplicantSocialSecurityNumber: string;
    AssetType: string;
    Depository: string;
    DepositoryStreetAddress: string;
    DepositoryCity: string;
    DepositoryState: string;
    DepositoryZipCode?: any;
    DepositoryZipCodePlusFour?: any;
    Acctno: string;
    CashorMarketValue: string;
    NumberofStock?: any;
    AssetDescription: string;
    ReservedforFutureUse: string;
    SessionId: string;
  }
  
  export class ProposedHousingExpense {
    ApplicantSocialSecurityNumber: string;
    ProposedIndicator: string;
    HousingPaymentTypeCode: string;
    HousingPaymentAmount: number;
    SessionId: string;
  }
  
  export class PrimaryCurrentEmployer {
    ApplicantSocialSecurityNumber: string;
    EmployerName: string;
    EmployerStreetAddress: string;
    EmployerCity: string;
    EmployerState: string;
    EmployerZipCode?: any;
    EmployerZipCodePlusFour?: any;
    SelfEmployed: string;
    Yrsonthisjob: number;
    Monthsonthisjob?: number;
    profession: number;
    TypeofBusiness: string;
    BusinessPhone?: any;
    SessionId: string;
  }
  
  export class DependentsAge {
    ApplicantSocialSecurityNumber: string;
    Dependentsage: number;
    SessionId: string;
  }
  
  export class ApplicantsAddress {
    ApplicantSocialSecurityNumber: string;
    Present: string;
    ResidenceStreetAddress: string;
    ResidenceCity: string;
    ResidenceState: string;
    ResidenceZipCode: number;
    ResidenceZipCodePlusFour?: any;
    LivingRentFree: string;
    NoYrs: number;
    NoMonths?: any;
    Country: string;
    SessionId: string;
  }
  
  export class Income {
    ApplicantSocialSecurityNumber: string;
    TypeofIncomeCode: string;
    IncomeAmount: number;
    SessionId: string;
  }
  
  export class DownPayment {
    DownPaymentTypeCode: string;
    DownPaymentAmount: number;
    DownPaymentExplanation: string;
    SessionId: string;
  }
  
  export class ConstructionorRefinanceData {
    YearAcquired: string;
    OriginalCost?: any;
    AmountExistingLiens?: any;
    PresentValueofLot?: any;
    CostofImprovements?: any;
    PurposeofRefinance: string;
    DescribeImprovements: string;
    tobemade: string;
    Cost?: any;
    SessionId: string;
  }
  
  export class TitleHolder {
    TitleholderName: string;
    SessionId: string;
  }
  
  export class PurposeofLoan {
    ReservedforFutureUse: string;
    Purposeofloan: string;
    PurposeofLoanOther: string;
    Propertywillbe: string;
    MannerinwhichTitlewillbeheld: string;
    Estatewillbeheldin: string;
    EstatewillbeheldinLeaseholdexpirationdate?: any;
    SessionId: string;
  }
  
  export class PropertyAddressInformation {
    HouseNumber: string;
    StreetName: string;
    UnitNumber: string;
    SessionId: string;
  }
  
  export class PropertyInformation {
    PropertyStreetAddress: string;
    PropertyCity: string;
    PropertyState: string;
    PropertyZipCode: number;
    PropertyZipCodePlusFour?: any;
    NoofUnits: number;
    LegalDescriptionofSubjectPropertyCode: string;
    LegalDescriptionofSubjectProperty: string;
    YearBuilt: number;
    SessionId: string;
  }
  
  export class MortgageTypeandTerms {
    MortgageAppliedFor: string;
    MortgageAppliedForOther?: any;
    AgencyCaseNumber: string;
    CaseNumber: string;
    LoanAmount: number;
    InterestRate: number;
    NoofMonths: number;
    AmortizationType: string;
    AmortizationTypeOtherExplanation: string;
    ARMTextualDescription: string;
    SessionId: string;
  }
  
  export class TopofForm {
    AdditionalBorrowerAssetsConsideredIndicator: string;
    AdditionalBorrowerAssetsConsideredIndicators: string;
    SessionId: string;
  }
  
  export class FileIdentification {
    FileType: string;
    FileVersionID: string;
    ExportVersionIndicator: string;
    SessionId: string;
  }
  
  export class TransactionProcessingInfo {
    VersionID: string;
    IdentifierTypeCode: string;
    Identifier: string;
    ImportActionIndicator: string;
    SessionId: string;
  }
  
  export class TransactionHeader {
    TransactionID: string;
    TransactionControlNumber: string;
    SessionId: string;
  }
  
  export class EnvelopeHeader {
    InstitutionID: string;
    InstitutionName: string;
    Date: string;
    EnvelopeControlNumber: string;
    SessionId: string;
  }