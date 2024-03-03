"use client";

import { Participant, Team } from "../api/hyperionSchemas";
import { EmptyParticipantCard } from "../components/home/EmptyParticipantCard";
import { ParticipantCard } from "../components/home/ParicipantCard";
import { TeamCard } from "../components/home/TeamCard";
import { TopBar } from "../components/home/TopBar";
import { useAuth } from "./hooks/useAuth";
import { useRouter } from "next/navigation";

const Home = () => {
  const { isTokenQueried, token } = useAuth();

  const router = useRouter();

  if (isTokenQueried && token === null) {
    router.replace("/login");
  }

  const captain: Participant = {
    id: "1",
    validation_progress: 0.4,
    name: "Test",
    firstname: "Capitaine",
    birthday: "2021-10-10",
    address: "Address test",
    phone: "Phone",
    email: "Email",
    bike_size: "M",
    t_shirt_size: "M",
    situation: "corporatePartner",
    other_school: null,
    company: "Test company",
    diet: null,
    id_card: {
      id: "1",
      name: "carte identité.png",
      type: "idCard",
      uploaded_at: "2021-10-10",
      validated: true,
    },
    medical_certificate: {
      id: "1",
      name: "certificat médical.png",
      type: "medicalCertificate",
      uploaded_at: "2021-10-10",
      validated: false,
    },
    security_file: {
      id: "1",
      name: "Security",
      firstname: "Firstname",
      birthday: "2021-10-10",
      address: "Address",
      phone: "03135686",
      asthma: false,
    },
    student_card: null,
    raid_rules: null,
    attestation_on_honour: true,
    payment: false,
  };

  const second: Participant = {
    id: "1",
    validation_progress: 0.2,
    name: "Name",
    firstname: "Firstname",
    birthday: "2021-10-10",
    address: "Address",
    phone: "Phone",
    email: "Email",
    bike_size: "L",
    t_shirt_size: "XL",
    situation: "centrale",
    other_school: null,
    company: null,
    diet: null,
    id_card: {
      id: "1",
      name: "carte identité.png",
      type: "idCard",
      uploaded_at: "2021-10-10",
      validated: true,
    },
    medical_certificate: null,
    security_file: null,
    student_card: null,
    raid_rules: null,
    attestation_on_honour: false,
    payment: false,
  };
  const team: Team = {
    name: "Equipe 1",
    id: "1",
    number: 5,
    difficulty: null,
    validation_progress: 0.4,
    captain: captain,
    second: null,
  };

  return (
    <>
      <TopBar />
      <main className="flex flex-col items-center">
        <div className="w-full px-24">
          <TeamCard team={team} />
        </div>
        <div className="flex flex-row w-full justify-evenly">
          <ParticipantCard participant={team.captain} isCaptain />
          {team.second ? (
            <ParticipantCard participant={team.second} isCaptain={false} />
          ) : (
            <EmptyParticipantCard />
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
