import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useCreateEntry, useGetEntries } from "./api";
import TextInput from "../../../../components/elements/text-field";
import SelectDropdown from "../../../../components/elements/dropdown-select";
import TextArea from "../../../../components/elements/text-area";
import { useFormik } from "formik";
import { CREATEENTRYSCHEMA } from "../../../schema";
import { toast } from "react-toastify";
import TableSkeletonLoader from "../../../../components/elements/page-loader/dasboard-loader";
import DashboardSummary from "./summary";

export interface NewEntriesI {
  date: string;
  watchedPorn: string;
  relapseDetails: string;
  notes: string;
}

const UserDashboard = () => {
  const [showSidePanel, setShowSidePanel] = useState(false);
  const { decodedValue } = useSelector((store: any) => store.auth);

  const { data,isFetching, refetch } = useGetEntries();

  const Entries = data?.tracker;

  const todayDate = new Date();
  const convert = todayDate.toLocaleDateString();
  const [month, day, year] = convert.split("/");
  const formattedDate = `${year}-${month.padStart(2, "0")}-${day.padStart(
    2,
    "0"
  )}`;

  // const dispatch = useDispatch();
  const createEntryMutation = useCreateEntry();

  //initial form value
  const initialValues: NewEntriesI = {
    date: '2025-04-27',
    watchedPorn: "",
    relapseDetails: "",
    notes: "",
  };
  

  const { handleSubmit, handleChange, values, errors, touched, setFieldValue } =
    useFormik<NewEntriesI>({
      initialValues,
      validationSchema: CREATEENTRYSCHEMA,
      onSubmit: () => {
        createEntryMutation.mutate(values, {
          onSuccess: (data) => {
            toast.success(data.status);
            setShowSidePanel(false)
            refetch()
          },
          onError: (error) => {
            toast.error(error.message);
          },
        });
      },
    });

    if(isFetching){
        return <TableSkeletonLoader/>
    }
     
    if(Entries?.length < 1) {
        return <div>
            <h2>No Record Found</h2>
        </div>
    }
  return (
    <main>
       
      <div className="flex relative justify-between items-center">
        
        <p className="text-black font-semibold">
          Welcome{" "}
          <span className="capitalize font-bold">
            {decodedValue.username}!!!
          </span>{" "}
        </p>
        <button
          onClick={() => setShowSidePanel(!showSidePanel)}
          className=" font-bold cursor-pointer rounded-xl bg-[white] shadow-[#d2d2d2] shadow-xl text-xs py-3 px-6 "
        >
          Add Entry
        </button>
        <form
          onSubmit={handleSubmit}
          className={`${
            showSidePanel ? "right-0" : "-right-[50rem]"
          } z-20 w-[80%] md:w-[40%] top-20 transition-all duration-500 ease-in-out absolute bg-[#c4c1c1]  shadow-[#d2d2d2] shadow-xl rounded-xl py-3 px-4`}
        >
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Enter Today's Report </h2>
            <FaTimes
              onClick={() => setShowSidePanel(false)}
              className="text-red-500 cursor-pointer "
              size={22}
            />
          </div>

          <section className="flex flex-col mt-4">
            <TextInput
              label="Date"
              value={formattedDate}
              disabled={true}
              onChange={() => {}}
              name="date"
              className="bg-[grey] w-full shadow-2xl shadow-[grey]"
            />
          </section>
          <section className="flex flex-col ">
            <SelectDropdown
              label="Watched Porn"
              options={[
                { value: "yes", label: "yes" },
                { value: "no", label: "no" },
              ]}
              onChange={(selected: any) =>
                setFieldValue("watchedPorn", selected.value)
              }
              name="watchedPorn"
              customStyle="10px"
            />
            {errors.watchedPorn && touched.watchedPorn && (
              <p className="text-red-500">{errors.watchedPorn}</p>
            )}
          </section>
          <section className="flex flex-col mt-4">
            <SelectDropdown
              label="Relapse Details"
              options={[
                { value: "I seeked porn", label: "I seeked porn" },
                { value: "I consumed porn", label: "I consumed porn" },
              ]}
              name="relapseDetails"
              onChange={(selected: any) =>
                setFieldValue("relapseDetails", selected.value)
              }
              customStyle="10px"
            />
            {errors.relapseDetails && touched.relapseDetails && (
              <p className="text-red-500">{errors.relapseDetails}</p>
            )}
          </section>
          <section className="flex flex-col mt-4"></section>
          <TextArea
            label="Others"
            value={values.notes}
            
            textAreaName="notes"
            onChange={handleChange}
            placeholder="message..."
           
          />
          {errors.notes && touched.notes && (
              <p className="text-red-500">{errors.notes}</p>
            )}
          <section>
            <button
              type="submit"
              className="bg-black cursor-pointer text-white px-4 py-3 rounded-xl w-full mt-5"
            >
              {
                createEntryMutation.isPending ? 'Creating...' : 'Create'
              }
            </button>
          </section>
        </form>
      </div>

      <section className="block lg:hidden mt-5">
            <DashboardSummary isFetching={isFetching}/>
        </section>

        <div className="mt-5">
            <h3 className="text-xl font-bold">Entries Record</h3>
        </div>
      <div className="grid md:grid-cols-3 gap-3 mt-5">
        {Entries?.map((item: any, index: number) => (
          <div
            key={item._id}
            className="rounded-xl flex flex-col gap-y-3 bg-[white] shadow-[#d2d2d2] px-3 py-2 shadow-xl"
          >
            <section className="flex items-center justify-between">
              <h2 className="font-semibold">S/N</h2>
              <p className="text-sm text-[grey]">{index + 1}</p>
            </section>
            <section className="flex items-center justify-between">
              <h2 className="font-semibold">Date</h2>
              <p className="text-sm text-[grey]">{item.date}</p>
            </section>
            <section className="flex items-center justify-between">
              <h2 className="font-semibold">Watched Porn</h2>
              <p className="text-sm text-[grey]">
                {item.watchedPorn === true ? "Yes" : "No"}
              </p>
            </section>
            <section className="flex items-center justify-between">
              <h2 className="font-semibold">Relapse Details</h2>
              <p className="text-sm text-[grey]">{item.relapseDetails}</p>
            </section>
            <section className="flex flex-col">
              <h2 className="font-semibold">Note</h2>
              <p className="text-sm text-[grey]">{item.notes}</p>
            </section>
            <section className="flex items-center justify-between">
              <h2 className="font-semibold">Action</h2>

              <BsThreeDotsVertical
                className="cursor-pointer rotate-90 text-black"
                size={24}
              />
            </section>
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-col md:flex-row justify-between md:items-center">
        <section>1 to 10 of 60 Enteries</section>
        <section className="flex flex-row gap-x-2 md:items-center md:justify-normal justify-end items-end">
          <p>First</p>
          <div className="flex items-center gap-x-1">
            {[1, 2, 3].map((item) => (
              <p
                key={item}
                className="size-5 rounded-sm flex flex-col justify-center items-center p-2 bg-white shadow-[grey] shadow-2xl"
              >
                {item}
              </p>
            ))}
          </div>
          <p className="-mt-2">...</p>
          <p className="size-5 rounded-sm flex flex-col justify-center items-center p-2 bg-white shadow-[grey] shadow-2xl">
            {4}
          </p>
          <p>Last</p>
        </section>
      </div>
    </main>
  );
};

export default UserDashboard;
