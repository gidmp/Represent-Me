import React from "react";
import Nav from "../components/Nav";
import Section from "../components/Section";
import Background from "../components/Background";
import imageLink from "../assets/images/background/buttonsandflags.jpg";


function Education(){
    return(
        <div>
        <Nav />
        <Background image = {imageLink}></Background>
            <Section>
                <h3>What's the Difference?</h3>
                <p>
                    Unsure of the differences between Governor and Senator? Between Democrats and Republicans? Do you know there are more than two parties you can vote for?
                    Check out the available information on this page to help you decide who best represents you to make informed decisions.
                </p>
            </Section>
            {/* <Section>
                <h3>Governors vs. Congress</h3>
                <p>
                Each state has one governor and two senators.
                These two senators are part of congress, which is split into two parts- the Senate and the House of Representatives.
                Senators are members of the senate, while representatives are members of the House of Representatives.
                Our website focuses on elections for governors and senators as they serve at the state level, while representatives serve their local districts.
        
                A Governor is like the President of his or her State. 
                They are not involved in the making of laws, but they are responsible for making sure everybody honors and enforces them. 
                They are responsible for improving the economics and services of their states, implementing, proposing and signing their state laws, and setting policies for community requirements and social issues. 
                They also have the right to appoint judges in their state courts.
                Although they are not involved in legislation and national politics related issues, their influence may have impact on national level decisions and policies. 
                Citizens of states directly elect their Governor, after which they are answerable to the people as well as to the US President. 
                Being a high-profile rank, no other Congress member outranks the Governor.
                Most governors are elected for 4 years, but in some states, they have only 2 year terms.
                A person can not be elected as a Governor more than two times consecutively.
        
        
                The senate is comprised of 100 elected officers in the US, each of the 50 states in the country have 2 Senators. 
                This brings a balance in the extent of power each US state exercises. 
                Regardless of the state’s population, each of the states gets equivalent voting power in the US Senate. 
                Once the House of Representatives passes a bill, the Senators vote on it. If a bill receives positive stand from the majority of Senators, then it goes for final approval by the President. 
                Upon approval, the President signs it to make it a law. After this, everyone has to obey this law until or unless the Supreme Court refuses it or places provisions on it. In this case, the President does not approve the bill, it is returned to the Congress to be revised and re-submitted. However, if the bill receives more than 2/3rd of votes in the Senate, the President can be overruled and it is passed under Senate Supermajority. 
                This is a great provision, since the President cannot dominate the Senate and refuse a bill even if it receives approval from a majority of Senators. 
                The Senators even have the right to speak against a proposed bill for a long time.
                Senators serve 6 year terms before they are up for re-election.
        
                There are currently 435 representatives who serve in the House of Representatives, where a state’s representation is based on its population.
                For example, smaller states like Vermont 1 representative while medium states like Michigan have 14 and large states like California have 53.
                These representatives serve 2 year terms.
                </p>
            </Section>
            <Section>
                <h3>There's a Party for Everybody</h3>
                <p>
                    Democrat:
                    Republican:
                    Independent:
                    Libertarian:
                    Green:
                    Constitution:
        
                    These are only the major and minor parties listed on most ballots in the US. This list is not exhastive- there are many other smaller parties that have been created when people feel that no other party represents them!
                </p>
            </Section> */}
        </div>
    )
}

export default Education;