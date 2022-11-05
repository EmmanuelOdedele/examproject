import {useEffect, useState, createContext} from React;
import RepoInfo from "./RepoInfo";

const Context = createContext()

function GithubContext() {
    return (
        <Context.Provider>
<RepoInfo/>
        </Context.Provider>
    )
}

export default GithubContext