import React from "react";
import { TextStyle } from "@shopify/polaris";

import {
    QUERY_SCRIPTTAGS,
    WRITE_SCRIPTTAGS,
    DELETE_SCRIPTTAGS,
} from "./queries";
import { Query, Mutation, graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
class Index extends React.Component {
    handleToggle = async () => {
        const { writeScript, deleteScript } = this.props;
        const WRITE_SCRIPTTAGS_VARS = {
            variables: {
                input: {
                    src:
                        "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js",
                    displayScope: "ALL",
                },
            },
        };
        const resp = await writeScript(WRITE_SCRIPTTAGS_VARS);
        console.log("write resp", resp);
    };
    render() {
        return (
            <div onClick={() => this.handleToggle()}>
                <TextStyle variation="positive">
                    Sample app using React and Next.js
                </TextStyle>
            </div>
        );
    }
}

export default compose(
    graphql(WRITE_SCRIPTTAGS, {
        name: "writeScript",
    }),
    graphql(DELETE_SCRIPTTAGS, {
        name: "deleteScript",
    }),
    graphql(QUERY_SCRIPTTAGS, {
        name: "queryScripts",
    })
)(Index);
