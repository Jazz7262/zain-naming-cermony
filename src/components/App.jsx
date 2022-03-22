import React from "react";
import DeveloperInfo from "./DeveloperInfo";
import Navbar from "./Navbar";
import PraisingContent from "./PraisingContent";
import Slide from "./Slide";
import BabyInfo from "./BabyInfo";
import InvitationQuote from "./InvitationQuote";
import Timeline from "./Timeline";
import Compliments from "./Compliments";
import BabyQuote from "./BabyQuote";
import CountDown from "./CountDown";
import InviteNote from "./InviteNote";
import Audio from "./Audio";
import CustomModal from "./CustomModal";

function App() {
    return (
        <>
            <Navbar />
            <PraisingContent />
            <Slide />
            <BabyInfo />
            <InvitationQuote />
            <Timeline />
            <BabyQuote />
            <CountDown />
            <InviteNote />
            <Compliments />
            <Audio />
            <DeveloperInfo />
            <CustomModal />
        </>
    );
}

export default App;
