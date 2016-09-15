var React=require("react");
var company=require("./Company");



var CompanyList = React.createClass({
        handleCompanyRemove: function(company){
          this.props.onCompanyRemove( company );
        },
        render: function() {
          var companies = [];
          var that = this; // TODO: Needs to find out why that = this made it work; Was getting error that onCompanyDelete is not undefined
          this.props.clist.forEach(function(company) {
            companies.push(<Company company={company} onCompanyDelete={that.handleCompanyRemove} /> );
          });
          return ( 
            <div>
              <h3>List of Companies</h3>
              <table className="table table-striped">
                <thead><tr><th>Company Name</th><th>Employees</th><th>Head Office</th><th>Action</th></tr></thead>
                <tbody>{companies}</tbody>
              </table>
            </div>
            );
        }
      });
      
module.exports=CompanyList;