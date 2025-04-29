import { useGetScore, useGetStartDate } from "../../features/auth/api";
import { useGetEntries } from "../../features/dashboard/user/main-dashboard/api";

const DashboardSidebar = () => {
  const { isFetching } = useGetEntries();

  const { data: score } = useGetScore();
    const { data: startDate } = useGetStartDate();
  

  if (isFetching) {
    return (
      <div className="flex flex-col h-screen gap-2 ">
        <div className="h-1/2 p-2">
          <div className="w-full h-[50vh] rounded-lg bg-[#dad8d8] wave-effect" />
        </div>
        <div className="h-1/2 p-2">
          <div className="w-full  h-[50vh] rounded-lg bg-[#dad8d8] wave-effect" />
        </div>
      </div>
    );
  }
  return (
    <aside className="flex flex-col gap-y-3 h-screen p-2">
      <div className="bg-[#c4c1c1] px-2 py-3 h-[50%] rounded-xl flex flex-col items-center justify-center">
        <div className="rounded-full border-8 size-40 border-white  flex flex-col items-center justify-center ">
          <h3 className="font-bold text-2xl">
            Day{" "}
            {startDate?.start
              ? Math.ceil(
                  (new Date().setHours(0, 0, 0, 0) -
                    new Date(startDate.start).getTime()) /
                    (1000 * 60 * 60 * 24)
                )
              : ""}{" "}
          </h3>
        </div>
      </div>
      <div className="bg-[#c4c1c1] px-2 py-3 h-[50%] rounded-xl flex flex-col items-center justify-center">
        <div className="rounded-full border-8 size-40 border-white text-sm flex flex-col items-center justify-center ">
          <h3 className="font-bold text-2xl">
            Score {score?.result ? Number(score.result).toFixed() : "0"}%
          </h3>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
