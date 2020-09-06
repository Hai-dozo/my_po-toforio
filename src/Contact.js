import React from "react";

class Contact extends React.Component {
    render(){
        return(
            <div class="modal">
                <form action="#">
                    <h4>Inquiry Type</h4>
                        <label class="col-md-4" for="feed-back" name="inquiry-type">
                            <input id="feed-back" type="checkbox" />Feed Back
                        </label>
                        <label class="col-md-4" for="work-request" name="inquiry-type">
                            <input id="work-request" type="checkbox" />Work Request
                        </label>
                        <label class="col-md-4" for="collaborative-work" name="inquiry-type">
                            <input id="collaborative-work" type="checkbox" />Collaborative Work
                        </label>
                    <h4>Detail</h4>
                        <input type="text" required/>
                    <h4>Name</h4>
                        <input type="text" required/>
                    <h4>Email</h4>
                        <input type="text" required/>
                    <br/><button type="submit">Send</button>
                </form>
            </div>
        )
    }
}

export default Contact