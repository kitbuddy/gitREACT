var React=require("react"); 

var Company = React.createClass({
        handleRemoveCompany: function() {
          this.props.onCompanyDelete( this.props.company );
          return false;
        },
        render: function() {
          return (
            <tr>
              <td>{this.props.company.cname}</td>
              <td>{this.props.company.ecount}</td>
              <td>{this.props.company.hoffice}</td>
              <td><input type="button"  className="btn btn-primary" value="Remove" onClick={this.handleRemoveCompany}/></td>
            </tr>
            );
        }
      });

module.exports=Company;