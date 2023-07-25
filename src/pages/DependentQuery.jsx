import { useQuery } from "react-query";
import { userApi, channelApi } from "../api/api";
const DependentQuery = ({ email }) => {
  // first fetch user for get channelId
  const { data: userData } = useQuery(["user-query", email], () =>
    userApi(email)
  );
  const channelId = userData?.data.channelId;

  console.log("user : ", userData?.data);

  // then now fetch channel
  const { data: channelData } = useQuery(
    ["channel-query", channelId],
    () => channelApi(channelId),
    {
      enabled: !!channelId,
    }
  );

  console.log("channelData : ", channelData?.data.courses);

  return <div>DependentQuery</div>;
};

export default DependentQuery;
