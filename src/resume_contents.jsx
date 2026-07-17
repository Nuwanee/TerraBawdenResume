

export default function MyResume() {

    return (
        <>
            <div className={"header-card"}>
                <img src={'portrait.jpg'} className={"portrait-img"} alt="Portrait Image" />

                <div className={"section-card"}>
                    <h1>Terra Nuwanee Bawden</h1>
                    <p className={"explanation"}>Engineer, focusing on the application of ethics to software, systems, and innovation.</p>
                    <br/>

                    <a href={"https://www.linkedin.com/in/terra-nuwanee-bawden"}>
                        View My LinkedIn Profile
                    </a>
                    <p>tnuwaneeb@gmail.com</p>
                    <p>865-236-9471</p>
                </div>
            </div>


            <div className={"section-card"}>
                <h2>Experience</h2>
                <p className={"explanation"}>Relevant positions listed. For complete work history, review LinkedIn profile.</p>

                <h3>SmartRealtyAI</h3>
                <h4>Full Stack Software Engineer</h4>
                <p className={"date-chip"}>August 2025 - May 2026</p>
                <h4>Description:</h4>
                <p>Worked as part of a small team to design, implement, test, and deploy a complete end-to-end website by working directly with the client using Agile methodologies, including: python backend on Render, React frontend on Vercel, various external API integrations, a proprietary machine learning model configuration, security, and more.</p>

                <h3>Wright Business Graphics</h3>
                <h4>Application Developer</h4>
                <p className={"date-chip"}>January 2023 - May 2026</p>
                <h4>Description:</h4>
                Maintained and adhered to strict data security procedures, including SOC2 and HIPAA compliance. Developed, tested, and conducted quality assurance reviews on client-driven software applications.Translated complicated technical information into clear, understandable terms for clients.

                <h3>SkyPoint Cloud</h3>
                <h4>Data Analytics Consultant</h4>
                <p className={"date-chip"}>March 2022 - November 2022</p>
                <h4>Description:</h4>
                Assisted in project management of and provided expert consultation on the use of R, Python, Git, and Microsoft Power BI to achieve actionable business insights.Developed and taught data analytics and Power BI curriculum, addressing client-specific needs and queries.Communicated directly with clients to understand requirements and provided tailored data solutions leveraging additional tools such as Microsoft Power Platform, Databricks, and Snowflake.
            </div>

            <div className={"section-card"}>
                <h2>Skills</h2>
                <p className={"explanation"}>This list represents a general overview. Inquire for comprehensive discussion or specific experience.</p>

                <table>
                    <tr>
                        <td className={"ar"}>Engineering</td>
                        <td>Formal engineering processes from inception to completion</td>
                    </tr>
                    <tr>
                        <td className={"ar"}>Full-Stack Programming</td>
                        <td>Language agnostic with proficiency in multiple programming languages across all paradigms including but not limited to Java, C/C++,  Python, React, and SQL</td>
                    </tr>
                    <tr>
                        <td className={"ar"}>Ethics & General Philosophy</td>
                        <td>As applied generally, to technology, to business and professional contexts, and more</td>
                    </tr>
                    <tr>
                        <td className={"ar"}>Machine Learning and Data Science</td>
                        <td>Implementation and optimization of  regression models for business applications</td>
                    </tr>
                    <tr>
                        <td className={"ar"}>Data Analytics, Modeling, & Engineering</td>
                        <td>Certified in complete data management, including sensitive data, ETL, and graphical  visualizations for business analytics and insights</td>
                    </tr>
                    <tr>
                        <td className={"ar"}>Additional</td>
                        <td>Experience with AWS and API integrations such as Spark</td>
                    </tr>
                </table>
            </div>

            <div className={"section-card"}>
                <h2>Education</h2>

                <h3>Arizona State University: Ira A. Fulton Schools of Engineering</h3>

                <table>

                    <tr>
                        <td className={"ar"}>Gradutated</td>
                        <td>May 2026</td>
                    </tr>
                    <tr>
                        <td className={"ar"}>Major</td>
                        <td>B.S. Software Engineering</td>
                    </tr>
                    <tr>
                        <td className={"ar"}>Minor</td>
                        <td>Applied Ethics</td>
                    </tr>
                    <tr>
                        <td className={"ar"}>Honors</td>
                        <td>Cumma Sum Laude</td>
                    </tr>
                    <tr>
                        <td className={"ar"}>Dean's List</td>
                        <td>2024 Fall, 2025 Spring, 2025 Fall, 2026 Spring</td>
                    </tr>
                    <tr>
                        <td className={"ar"}>GPA</td>
                        <td>3.89</td>
                    </tr>
                </table>

                <em><b>Continuing Education Fall 2026:</b> MS Public Interest Techology at Arizona State University: Rob Walton College of Global Futures</em>
            </div>

            <div className={"section-card"}>
                <h2>Hobbies and Interests</h2>

                <ul>
                    <li>Weightlifting</li>
                    <li>Automobile Maintenance</li>
                    <li>Ethics & Philosophy</li>
                    <li>Gaming</li>
                    <li>Creative Arts</li>
                    <li>Travel</li>
                </ul>
            </div>

        </>
    )

}