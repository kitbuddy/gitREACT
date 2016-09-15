
var companylist=require("./CompanyList");
var company=require("./Company");


var CompanyApp = React.createClass({
        getInitialState: function() {
          return {companylist:this.props.companies};
        },
        handleNewRowSubmit: function( newcompany ) {
          this.setState( {companylist: this.state.companylist.concat([newcompany])} );
        },
        handleCompanyRemove: function( company ) {
          
          var index = -1;	
          var clength = this.state.companylist.length;
      		for( var i = 0; i < clength; i++ ) {
      			if( this.state.companylist[i].cname === company.cname ) {
      				index = i;
      				break;
      			}
      		}
      		this.state.companylist.splice( index, 1 );	
      		this.setState( {companylist: this.state.companylist} );
        },
        render: function() {
          var tableStyle = {width: '100%'};
          var leftTdStyle = {width: '50%',padding:'20px',verticalAlign: 'top'};
          var rightTdStyle = {width: '50%',padding:'20px',verticalAlign: 'top'};
          return ( 
            <table style={tableStyle}>
              <tr>
                <td style={leftTdStyle}>
                  <CompanyList clist={this.state.companylist}  onCompanyRemove={this.handleCompanyRemove}/>
                </td>
                <td style={rightTdStyle}>
                  <NewRow onRowSubmit={this.handleNewRowSubmit}/>
                </td>
              </tr>
          </table>
          );
        }
      });
      