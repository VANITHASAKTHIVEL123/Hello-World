<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="WebApplication3.WebForm1" %>

<!DOCTYPE html>
<script runat="server">


</script>



<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <script type="text/javascript" src='https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.3.min.js'></script>
    <script type="text/javascript" src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.3/js/bootstrap.min.js'></script>
    <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.3/css/bootstrap.min.css'
        media="screen" />
    <script type="text/javascript" src="http://codeseven.github.com/toastr/toastr.js">  
    </script>

    <link rel="stylesheet" type="text/css" href="http://codeseven.github.com/toastr/toastr.css" />
    <link rel="stylesheet" type="text/css" href="http://codeseven.github.com/toastr/toastr-responsive.css" />
    <script src="Content/jquery.btnswitch.min.js"></script>
    <link href="Content/jquery.btnswitch.min.css" rel="stylesheet" />

    <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.min.js"> </script>
         <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.js">  </script>
         <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.min.js">  </script>

    
   
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>


    <link rel="stylesheet" type="text/css" href="toastrsample.css" />

    <title></title>
    <script type="text/javascript">
    $(document).ready(function () {
        debugger;
        $("#btnaddbutton").click(function () {
         
            alert("File Upload Sucessfullty");
              
            });
        })
    

</script>
    <style type="text/css">
        #Text1 {
            width: 132px;
            margin-left: 0px;
        }

        #Text2 {
            width: 132px;
            margin-left: 0px;
        }

        #Text3 {
            width: 132px;
            margin-left: 0px;
        }

        #Text4 {
            width: 132px;
            margin-left: 0px;
        }

        #Text5 {
            width: 132px;
            margin-left: 0px;
        }

        #pnlquickapp, Quickapp {
            width: 800px;
        }

        #pnlOrderCredit, Credit {
            width: 500px;
        }

        #grdDocumentManagement {
            margin-top: 1px;
            scrollbar-arrow-color: aqua;
            margin-right:2px;
            margin-left: 0px;
            padding-right:3px;
        }

        #dropCitizenshipType {
            width: 302px;
        }

        #DropPropertyInformation {
        }

        #DropOccupancyType {
            width: 371px;
        }

        #DropAssetsUnderManagement {
            width: 302px;
        }

        #DropPropertyInformation {
            width: 302px;
        }

        #Text2 {
            width: 132px;
            margin-left: 0px;
        }

        #Text3 {
            width: 132px;
            margin-left: 0px;
        }
        #lblQuickApp{
                 width:772px;
                text-align:left;
                 margin-left:-22px;
        }
      
        #lblDocumentManagement{
               width:772px;
              text-align:left;
              margin-left:-22px;
        }
        #form1{
            margin-left:21px;
            margin-right: 21px;
            margin-top:-40px;
        }
        .groove{
            border-style: groove;
            margin-left:154px;
            width:776px;
            height:913px;
            margin-top:20px;
           
        }
        #lblCredit{
            width:772px;
             text-align:left;
             margin-left:-22px;
        }
        .container-fluid {
            width: 748px;
            margin-left: 0px;
            margin-top: 0px;
        }
    </style>
</head>
<body  >
    <div class="groove">
    <form id="form1" runat="server"  dir="auto">
        <br />
        <br />
        <asp:Label ID="lblQuickApp" class="btn btn-primary" runat="server" Text="Quick App - Loan Data - 6666666146"></asp:Label>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br />
        <asp:Label ID="lblLoanAmount" runat="server" Text="Loan Amount"></asp:Label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
        <asp:Label ID="lblLoanamountlabel" runat="server" ></asp:Label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:Label ID="lblLoanPurpose" runat="server" Text="Loan Purpose"></asp:Label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:Label ID="lblPurchaselabel" runat="server" ></asp:Label>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br />
        <asp:Label ID="lblFirstName" runat="server" Text="First Name"></asp:Label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
        <asp:Label ID="lblFirstNamelabel" runat="server" ></asp:Label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <asp:Label ID="lblLastName" runat="server" Text="Last Name"></asp:Label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<asp:Label ID="lblLastNamelabel" runat="server" ></asp:Label>
        <br />
        <br />
        <asp:Label ID="lblSSN" runat="server" Text="SSN"></asp:Label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:Label ID="lblSSNlabel" runat="server" ></asp:Label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:Label ID="lblCitizenshiptypelabel" runat="server" Text="CitizenshipType"></asp:Label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
        <asp:Label ID="Citizenshiptypelabel" runat="server" ></asp:Label>
        <br />
        <br />
        <asp:Label ID="lblEstFicoScore" runat="server" Text="Est. Fico Score"></asp:Label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:Label ID="lblEstficoscorelabel" runat="server" ></asp:Label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <asp:Label ID="lblPropertyTypelabel" runat="server" Text="Property Type"></asp:Label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:Label ID="Propertytypelabel" runat="server" ></asp:Label>
        <br />
        <br />
        <asp:Label ID="lblPropertyState" runat="server" Text="Property State"></asp:Label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:Label ID="lblPropertyStatelabel" runat="server"></asp:Label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br />
        <br />
        <asp:Label ID="lblCredit" class="btn btn-primary" runat="server" Text="Credit"></asp:Label>
        <br />
        <br />
        <asp:Panel ID="pnlOrderCredit" runat="server" dir="auto">
            <asp:Label ID="lblCreditOrder" runat="server" Font-Size="15" Text="Pull a new Credit Order against the Primary Borrower"></asp:Label><br />
            <br />
            <asp:Button ID="btnOrderCredit" runat="server"  Text="Order Credit" /><br /> <br />
            <asp:Label ID="lblCreditScores" runat="server" Text="Credit Scores"></asp:Label>
            <br />
            <br />
            <asp:Label ID="lblEquifax" runat="server" Text="Equifax"></asp:Label>
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                <asp:Label id="txtEquifax" runat="server" type="text"  name="Equifax" />
            <br />
            <br />
            <asp:Label ID="lblExperian" runat="server" Text="Experian"></asp:Label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <asp:Label id="txtExperian"  runat="server" type="text"></asp:Label>
            <br />
            <br />
            <asp:Label ID="lblTransunion" runat="server" Text="Trans Union"></asp:Label>
            &nbsp;&nbsp;
                <asp:Label id="txtTransUnion"   runat="server" type="text" placeholder="TransUnion" />
           
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <asp:Button ID="btnViewCreditReport" runat="server" Text="View Credit Report" />
            <br />
            <br />
            <br />
            
          </asp:Panel>
        <br />
        <asp:Panel ID="pnlDocument" runat="server" style="margin-left: 0px" Height="288px" Width="750px">
            <asp:Label ID="lblDocumentManagement" class="btn btn-primary" runat="server"  Text="Document Management">
            </asp:Label>
            <br />
            <div class="container-fluid">
                <asp:GridView ID="grdDocumentManagement" runat="server" AutoGenerateColumns="false" BackColor="gray" Height="194px" ItemType="WebApplication3.Model.DocumentManagement.DocumentRequest" PageSize="8" Width="751px">
                    <RowStyle BackColor="White" />
                    <Columns>
                        <asp:DynamicField DataField="Name" SortExpression="Name" />
                        <asp:DynamicField DataField="Category" SortExpression="Category" />
                        <asp:DynamicField DataField="FileType" SortExpression="FileType" />
                        <asp:DynamicField DataField="Source" SortExpression="Source"/>
                        <asp:DynamicField DataField="Status" SortExpression="Status"/>
                    </Columns>
                   
               <HeaderStyle BackColor="#5D7B9D" Font-Bold="True"  
                  ForeColor="White" />
               <EditRowStyle BackColor="#999999" />
               <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                     <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                </asp:GridView>
              <asp:FileUpload ID="FileUpload1" runat="server" />
                <br />
                <asp:Button ID="btnsave" runat="server" OnClientClick="btnsave_Click()" Text="save" OnClick="btnsave_Click" Width="93px" />
                <asp:Label ID="lblmessage" runat="server" />
                <br />
                <asp:Button ID="btnaddbutton" runat="server" Text="Add Document" Width="150px" />
                <br />
            </div>
            <br />
        </asp:Panel>


        <p>&nbsp;</p>
        <p>
            &nbsp;
        </p>
        <p>
            &nbsp;
        </p>
        <p>&nbsp;</p>
        <p></p>
         </form>
        </div>
              
</body>
</html>
