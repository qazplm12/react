import React from 'react';
import Reply from "./Reply";

const items = [
    {text: 'Active'},
    {text: 'Link'},
    {text: 'Link'},
    {text: 'Disabled'},
]

const dates = [
    {text: 'Title description, Dec 7, 2020'},
    {text: 'Title description, Sep 2, 2020'},
]

function Header() {
    return (
        <header>
            <div className={'bg-primary text-center py-5'}>
                <h1 className={'text-white'}>My First Bootstrap 5 Page</h1>
                <p className={'text-white'}>Resize this responsive page to see the effect!</p>
            </div>

        </header>
    );
}

function Nav() {
    return(
        <nav className={'navbar navbar-expand-sm bg-dark navbar-dark'}>
            <NavItems/>
        </nav>
    )
}

function NavItems() {
    return (
        <ul className={'navbar-nav'}>
            {
                items.map((item) => {
                    return (
                        <NavItem text={item.text}/>
                    )
                })
            }
        </ul>
    )
}

function NavItem(props) {
    return (
        <li className={'nav-item'}>
            <a className={'nav-link'} href={'#'}>{props.text}</a>
        </li>
    )
}
function Main() {
    return (
        <main className={'container mt-5'}>
            <div className={'row'}>
                <Col1/>
                <Col2/>
            </div>
        </main>
    )
}

function Col1() {
    return (
        <div className={'col-4'}>
            <h2>About Me</h2>
            <h5>Photo of me:</h5>
            <div className={'bg-secondary pb-5'}>
                <p className={'pb-5 mb-5'}>Fake Image</p>
            </div>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            <h3 className={'mt-4'}>Some Links</h3>
            <p>Lorem ipsum dolor sit ame.</p>

            <ul className={'nav nav-pills flex-column'}>
                {
                    items.map((item) => {
                        return (
                            <NavItem text={item.text}/>
                        )
                    })
                }
            </ul>
        </div>
    )
}

function Col2() {
    return (
        <div className={'col-8'}>
            {
                dates.map((item) => {
                    return (
                        <TitleHeading text={item.text}/>
                    )
                })
            }
        </div>
    )
}

function TitleHeading(props) {
    return (
        <div className={'mb-5'}>
            <h2>TITLE HEADING
            </h2>
            <h5>{props.text}
            </h5>
            <div className={'bg-secondary pb-5'}>
                <p className={'pb-5 mb-5'}>Fake Image</p>
            </div>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco.</p>
        </div>
    )
}

function Footer() {
    return(
        <div className="mt-5 p-4 bg-dark text-white text-center">
            <p>Footer</p>
        </div>
    )
}

function BasicPage() {
    return (
        <div>
            <Header/>
            <Nav />
            <Main/>
            <Footer />
        </div>
    )
}

export default BasicPage;
