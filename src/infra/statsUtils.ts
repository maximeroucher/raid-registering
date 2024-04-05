import { TeamPreview } from "../api/hyperionSchemas";

export interface Stats {
  difficultyData: { value: number; label: string }[];
  meetingPlaceData: { value: number; label: string }[];
  bikeSizeData: { value: number; label: string }[];
  tShirtSizeData: { value: number; label: string }[];
}

export function getStats(seeAll: boolean, teams?: TeamPreview[]): Stats {
  const filteredTeams = teams?.filter((team) => seeAll); // TODO: filter teams with a valid status
  const difficultyData = getDifficultyData(seeAll, filteredTeams);
  const meetingPlaceData = getMeetingPlaceData(seeAll, filteredTeams);
  const bikeSizeData = getBikeSizeData(seeAll, filteredTeams);
  const tShirtSizeData = getTShirtSizeData(seeAll, filteredTeams);
  return {
    difficultyData,
    meetingPlaceData,
    bikeSizeData,
    tShirtSizeData,
  };
}

function getDifficultyData(
  seeAll: boolean,
  teams?: TeamPreview[],
): { value: number; label: string }[] {
  var response = [
    { value: 0, label: "Découverte" },
    { value: 0, label: "Sportif" },
    { value: 0, label: "Expert" },
  ];
  if (seeAll) {
    response.push({ value: 0, label: "Non renseigné" });
  }

  if (!teams) {
    return response;
  }
  teams.forEach((team) => {
    if (team.difficulty === "discovery") {
      response[0].value++;
    } else if (team.difficulty === "sports") {
      response[1].value++;
    } else if (team.difficulty === "expert") {
      response[2].value++;
    } else if (seeAll) {
      response[3].value++;
    }
  });
  return response;
}

function getMeetingPlaceData(
  seeAll: boolean,
  teams?: TeamPreview[],
): { value: number; label: string }[] {
  var response = [
    { value: 0, label: "Centrale" },
    { value: 0, label: "Bellecour" },
    { value: 0, label: "Peu importe" },
  ];
  if (seeAll) {
    response.push({ value: 0, label: "Non renseigné" });
  }
  if (!teams) {
    return response;
  }
  // teams.forEach((team) => {
  //     if (team.meeting_place === "central") {
  //         response[0].value++;
  //     } else if (team.meeting_place === "bellecour") {
  //         response[1].value++;
  //     } else if (team.meeting_place === "any") {
  //         response[2].value++;
  //     } else if (seeAll) {
  //         response[3].value++;
  //     }
  // });
  return response;
}

function getBikeSizeData(
  seeAll: boolean,
  teams?: TeamPreview[],
): { value: number; label: string }[] {
  var response = [
    { value: 0, label: "XS" },
    { value: 0, label: "S" },
    { value: 0, label: "M" },
    { value: 0, label: "L" },
    { value: 0, label: "XL" },
  ];
  if (seeAll) {
    response.push({ value: 0, label: "N/A" });
  }
  if (!teams) {
    return response;
  }
  //   teams
  //     .map((team) => [team.captain, team.second])
  //     .flat(1)
  //     .forEach((participant) => {
  //       if (participant) {
  //         if (participant.bike_size === "XS") {
  //           response[0].value++;
  //         } else if (participant.bike_size === "S") {
  //           response[1].value++;
  //         } else if (participant.bike_size === "M") {
  //           response[2].value++;
  //         } else if (participant.bike_size === "L") {
  //           response[3].value++;
  //         } else if (participant.bike_size === "XL") {
  //           response[4].value++;
  //         } else if (seeAll) {
  //           response[5].value++;
  //         }
  //       }
  //     });
  return response;
}

function getTShirtSizeData(
  seeAll: boolean,
  teams?: TeamPreview[],
): { value: number; label: string }[] {
  var response = [
    { value: 0, label: "XS" },
    { value: 0, label: "S" },
    { value: 0, label: "M" },
    { value: 0, label: "L" },
    { value: 0, label: "XL" },
  ];
  if (seeAll) {
    response.push({ value: 0, label: "N/A" });
  }
  if (!teams) {
    return response;
  }
  // teams
  //     .map((team) => [team.captain, team.second])
  //     .flat(1)
  //     .forEach((participant) => {
  //         if (participant) {
  //             if (participant.t_shirt_size === "XS") {
  //                 response[0].value++;
  //             } else if (participant.t_shirt_size === "S") {
  //                 response[1].value++;
  //             } else if (participant.t_shirt_size === "M") {
  //                 response[2].value++;
  //             } else if (participant.t_shirt_size === "L") {
  //                 response[3].value++;
  //             } else if (participant.t_shirt_size === "XL") {
  //                 response[4].value++;
  //             } else if (seeAll) {
  //                 response[5].value++;
  //             }
  //         }
  //     });
  return response;
}
