using System;
using System.Collections.Generic;
using WebApplication3.Model.QuickApp;
using WebApplication3.Model.DocumentManagement;
using System.Web.UI;
using System.Data;
using System.Text;
using System.Web.UI.WebControls;

namespace WebApplication3
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            DocumentResponse document = new DocumentResponse();
            grdDocumentManagement.DataSource = LoanData();
            grdDocumentManagement.DataBind();

            QuickappResponse quickappResponse = LoadLoanData();
            lblLoanamountlabel.Text = quickappResponse.LoanAmount;
            lblPurchaselabel.Text = quickappResponse.LoanPurpose;
            lblFirstNamelabel.Text = quickappResponse.FirstName;
            lblLastNamelabel.Text = quickappResponse.LastName;
            lblSSNlabel.Text = quickappResponse.SSN;
            Citizenshiptypelabel.Text = quickappResponse.CitizenshipType;
            lblEstficoscorelabel.Text = quickappResponse.EStFicoScore;
            lblPropertyStatelabel.Text = quickappResponse.PropertyState;
            Propertytypelabel.Text = quickappResponse.PropertyType;
           
        }

        #region Private Methods
        private List<DocumentResponse> LoanData()
        {
            //TOOD : Call QGateway
            List<DocumentResponse> documentResponseData = new List<DocumentResponse>();
            documentResponseData.Add(new DocumentResponse
            {
                Name = "W2",
                Category = "Income",
                FileType = "User Uploaded",
                Source = "Manual",
                Status = "Added"
            });

            documentResponseData.Add(new DocumentResponse
            {


                Name = "4506-T",
                Category = "Income",
                FileType = "User Uploaded",
                Source = "Manual",
                Status = "ReViewed"

            });
            documentResponseData.Add(new DocumentResponse
            {


                Name = "PurchaseAgreement",
                Category = "Other",
                FileType = "User Uploaded",
                Source = "Manual",
                Status = "ReViewed"
            });



            return documentResponseData;
        }

        #endregion

        #region LoadLoanData
        private QuickappResponse LoadLoanData()
        {

            QuickappResponse quickappResponse = new QuickappResponse() { 
          

                LoanAmount = "$250,000.00",
                LoanPurpose = "Purchase",
                FirstName = "Andy",
                LastName = "America",
                SSN = "***_**_1111",
                CitizenshipType = "US Citizen",
                EStFicoScore = "Very Good:750-799",
                PropertyState = "CA",
                PropertyType = "SFR Attached"

            };
            return quickappResponse;

        }

        #endregion



        protected void btnCreateLoan_Click(object sender, EventArgs e)
        {

          
        }

      

        protected void btnsave_Click(object sender, EventArgs e)
        {
            StringBuilder sb = new StringBuilder();
            if (FileUpload1.HasFile)
            {
                try
                {
                    sb.AppendFormat(" Uploading file: {0}", FileUpload1.FileName);
                    FileUpload1.SaveAs("<c:\\SaveDirectory>" + FileUpload1.FileName);
                    sb.AppendFormat("<br/> Save As: {0}", FileUpload1.PostedFile.FileName);
                    sb.AppendFormat("<br/> File type: {0}", FileUpload1.PostedFile.ContentType);
                    sb.AppendFormat("<br/> File length: {0}", FileUpload1.PostedFile.ContentLength);
                    sb.AppendFormat("<br/> File name: {0}", FileUpload1.PostedFile.FileName);
                }
                catch (Exception ex)
                {
                    sb.Append("<br/>Error<br/>");
                    sb.AppendFormat("Unable to save file<br/>{0}", ex.Message);
                }
            }
            else
            {
                lblmessage.Text = sb.ToString();
            }
        }
    }
        }



        

    


