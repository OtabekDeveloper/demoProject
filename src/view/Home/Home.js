import { Link } from 'react-router-dom'
import TextComponent from '../../component/textComponent/TextComponent'
import './Home.css'
function Home() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <ul className='left-menu'>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-8 border border-dark">
                        <h4 className='mt-3'>Home page title</h4>
                        <hr />


                        <TextComponent
                            title="👋 Welcome fellow Tailwind CSS fan. This starter template provides a starting point to create your own helpdesk / faq / knowledgebase articles using Tailwind CSS and vanilla Javascript."
                        />
                        <TextComponent
                            title="The basic help article layout is available and all using the default Tailwind CSS classes (although there are a few hardcoded style tags). If you are going to use this in your project, you will want to convert the classes into components."
                        />

                        <TextComponent
                            title="Heading 1"
                        />
                        <TextComponent
                            title="Heading 2"
                        />
                        <TextComponent
                            title="Heading 3"
                        />
                        <TextComponent
                            title="Heading 4"
                        />
                        <TextComponent
                            title="Heading 5"
                        />
                        <TextComponent
                            title="Heading 6"
                        />
                        <TextComponent
                            title="Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus purus, in mattis tortor sollicitudin pretium. Phasellus at diam posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend turpis vel erat bibendum scelerisque. Maecenas id risus dictum, rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla eget sem dictum elementum."
                        />


                        <TextComponent
                            title="Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit amet tellus scelerisque tortor semper posuere."
                        />
                        <TextComponent
                            title="Morbi varius posuere blandit. Praesent gravida bibendum neque eget commodo. Duis auctor ornare mauris, eu accumsan odio viverra in. Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium nec felis."
                        />
                        <TextComponent
                            title="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris, tristique in risus ac, tristique rutrum velit. Mauris accumsan tempor felis vitae gravida. Cras egestas convallis malesuada. Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien suscipit, elementum odio et, consequat tellus."
                        />
                        <TextComponent
                            def={true}
                            title="Example of blockquote - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."
                        />

                        <p>Example code block:</p>
                        <pre className='code-section'>
                          {
                              `
<header class="site-header outer">
<div class="inner">
{{> "site-nav"}}
</div>
</header>
                              `
                          }
                        </pre>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home