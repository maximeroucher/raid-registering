import { CoreUser } from "../api/hyperionSchemas";

const RAID_AMDINS_GROUP_ID = "b378b102-4979-4186-8630-d28fe460ee08";

export function isAdmin(user?: CoreUser) {
  return user?.groups
    ?.map((group) => group.id === RAID_AMDINS_GROUP_ID)
    .includes(true);
}
