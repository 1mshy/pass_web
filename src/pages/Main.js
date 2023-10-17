import { Component } from "react";
import React from "react";
import { Link, Navigate } from "react-router-dom";

class Main extends Component {
    render() {
        return (
            <Navigate to="/login" />
        );
    }
}


export default Main;