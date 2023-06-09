import Axios from 'axios';
import React from "react";

export class InsuranceService {
    static customerurl = "http://localhost:5003/Customer";
    static Agenturl = "http://localhost:5003/Agent";
    static SignInurl = "http://localhost:5003/Login";
    static SingUpurl = "http://localhost:5003/SignUp";
    static allagents = "http://localhost:5003/agents";

    static getCustomer = (id)=>{
        let geturl = `${this.customerurl}/${id}`;
        return Axios.get(geturl);
    }
    static getAgent = (id) =>{
        let geturl = `${this.Agenturl}/${id}`;
        return Axios.get(geturl);
    }
    static AddCustomer = (emp) =>{
        return Axios.post(this.customerurl,emp);
    }
    static AddAgent = (emp) =>{
        return Axios.post(this.Agenturl,emp)
    }
    static updateCustomer=(emp)=>{
        return Axios.put(this.customerurl,emp);
    }
    static updateAgent=(emp)=>{
        return Axios.put(this.Agenturl,emp);
    }

    static checkemailandpassword = (emp) =>{
        return Axios.post(this.SignInurl,emp);
    }

    static SignUpEm = (emp) =>{
        return Axios.post(this.SingUpurl,emp);
    }

    static Addacc = (emp) =>{
        return Axios.post(this.customerurl,emp);
    }

    static GetAgents() {

        return Axios.get(this.allagents);

    }

}