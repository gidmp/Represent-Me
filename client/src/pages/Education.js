import React from "react";
import Nav from "../components/Nav";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import VoteButton from "../components/VoteButton";
import Background from "../components/Background";
import imageLink from "../assets/images/background/buttonsandflags.jpg";

function Education(){
    return(
        <div>
        <Nav />
        <Background image = {imageLink}></Background>
            <Section1>
                <h2>What's the Difference?</h2>
                <p>
                    Unsure of the differences between Governor and Senator? Between Democrats and Republicans? Do you know there are more than two parties you can vote for?
                    Check out the available information on this page to help you decide who best represents you to make informed decisions.
                </p>
            </Section1>
            <Section2>
                <h2>Governors vs. Congress</h2>
                <p>Each state has one governor and two senators.
                These two senators are part of congress, which is split into two parts- the Senate and the House of Representatives.
                Senators are members of the senate, while representatives are members of the House of Representatives.
                Our website focuses on elections for governors and senators as they serve at the state level, while representatives serve their local districts.</p>
        
                <p>A Governor is like the President of his or her State. 
                They are not involved in the making of laws, but they are responsible for making sure everybody enforces them. 
                They are responsible for improving the economics and services of their states, implementing, proposing and signing their state laws, and setting policies for requirements and social issues. 
                They also have the right to appoint judges in their state courts.
                Although they are not involved in legislation and national politics related issues, their influence may have impact on national level decisions and policies. 
                Citizens of states directly elect their Governor. No other Congress member outranks the Governor.
                Most governors are elected for 4 years, but in some states, they have only 2 year terms.
                A person can not be elected as a Governor more than two times consecutively.</p>
        
                <p>The senate is made up of 100 elected officials in the US, where all 50 states are equally represented by 2 Senators. 
                This brings a balance of power each state is able to exercise. 
                Regardless of the state’s population, each of the states gets equivalent voting power in the US Senate. 
                Once the House of Representatives passes a bill, these Senators vote on it. If a bill receives positive stand from the majority of Senators, then it goes for final approval by the President. 
                Upon approval, the President signs it to make it a law. After this, everyone has to obey this law until or unless the Supreme Court refuses it or places provisions on it. In this case, the President does not approve the bill, it is returned to the Congress to be revised and re-submitted. However, if the bill receives more than 2/3rd of votes in the Senate, the President can be overruled and it is passed under Senate Supermajority. 
                This is done again to balance power, since the President cannot override the Senate and refuse a bill even if it receives approval from a majority of Senators. 
                Senators have the right to speak against a proposed bill for a long time, sometimes known as "filibustering" if they are purposely trying to delay the progress of a bill.
                Senators serve 6 year terms before they are up for re-election.</p>
        
                <p>There are currently 435 representatives who serve in the House of Representatives, where a state’s representation is based on its population.
                For example, smaller states like Vermont 1 representative while medium states like Michigan have 14 and large states like California have 53.
                These representatives serve 2 year terms.
                </p>
            </Section2>
            <Section3>
                <h2>There's a Party for Everybody</h2>
                <p>Democrat: https://democrats.org/</p>
                <p>Republican: https://www.gop.com/</p>
                <p>Libertarian: https://www.lp.org/</p>
                <p>Green: https://www.gp.org/</p>
                <p>Constitution: https://www.constitutionparty.com/</p>
                <p>Many candidates also run as "Independent", meaning that they do not affiliate with any particular party. Sometimes they do affiliate with a certain party, but there's another candidate running who has already been endorsed by that party. Make sure to investigate the policies that these candidates vote for so you know whether or not you want to elect them!</p>
                <p>These are only the major and minor parties listed on most ballots in the US. This list is not exhastive- there are many other smaller parties that have been created when people feel that no other party represents them. Read up and discover which party best aligns with your beliefs.</p>
                <VoteButton />
            </Section3>
        </div>
    )
}

export default Education;