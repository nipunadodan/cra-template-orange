import logo from './logo.svg';
import {ThemeToggle} from "../../common";
import './home.css';

export const Home = () => {
    return (
        <div className={"flex flex-col min-h-screen items-center justify-center dark:bg-gray-800 dark:text-white"}>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="text-6xl mb-6">Happy Hacking!</h1>
            <a href={'https://github.com/nipunadodan/cra-template-orange/blob/main/README.md#usage'} target={'_blank'} className={'text-lg bg-gray-200 dark:bg-gray-700 rounded-xl px-8 py-4'}>README.md</a>
            <ThemeToggle />
        </div>
    )
}