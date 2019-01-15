    import * as React from "react";

    export default  class Coverage extends React.Component {
        public state = {
          redirect: false,
        };

        public onSubmit(event) {
          event.preventDefault();
          location.assign(
            "https://auth.tronicogroup.com/oauth2/authorize?identity_provider=&response_type=TOKEN&client_id=1rg3u2ch329gb3n97chqai555h&scope=aws.cognito.signin.user.admin",
                  );
        }
        public render() {
                return (
                        <div className="cover">
                                <div className="cover-picture">
                                   <img className="cover-image" src="https://s3-us-west-2.amazonaws.com/www.mobconncorp.com/img/logo.png" alt="mobconn"/>
                                </div>
                                 <div>
                                        <button className="login-form-btn" onClick={this.onSubmit}>Redirect</button>

                                </div>
                        </div>
                );
              }
            }
