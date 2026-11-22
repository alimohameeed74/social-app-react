import { Button, Spinner } from "flowbite-react";
import SuggestedFriendCard from "../../components/Suggested-Friend-Card/SuggestedFriendCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import SuggestionCardLoader from "../../../../../shared/skeletons/suggestions/Suggestion-Card-Loader/SuggestionCardLoader";
import AlertMess from "../../../../../shared/components/Alert-Mess/AlertMess";
import axios from "axios";
import { API_URL } from "../../../../../shared/consts/Constants";

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [spinnerLoading, setSpinnerLoading] = useState(false);
  const [counter, setCounter] = useState(10);
  const navigate = useNavigate();

  function navigateToFeed() {
    navigate("/system/feed");
  }

  async function getSuggestions(counter) {
    if (counter === 10) {
      setIsLoading(true);
    } else {
      setSpinnerLoading(true);
    }
    try {
      const result = await axios.request({
        method: "GET",
        url: `${API_URL}/users/suggestions?limit=${counter}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token_")}`,
        },
      });
      setSuggestions(result.data.data.suggestions);
    } catch (error) {
      setSuggestions([]);
    } finally {
      setIsLoading(false);
      setSpinnerLoading(false);
    }
  }

  function increaseCounter() {
    setCounter(counter + 10);
  }

  useEffect(() => {
    function callApi() {
      getSuggestions(counter);
    }
    callApi();
  }, []);

  useEffect(() => {
    function callApi() {
      getSuggestions(counter);
    }

    callApi();
  }, [counter]);

  return (
    <section className="mx-auto max-w-4xl space-y-4">
      <Button
        onClick={navigateToFeed}
        className="inline-flex items-center gap-2 rounded-md border border-slate-200! bg-white! px-3! py-2! text-sm! font-bold! text-slate-700! transition hover:bg-slate-50!"
      >
        <i className="fa-solid fa-arrow-left"></i>
        Back to feed
      </Button>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-users"></i>
            <h1 className="text-md sm:text-lg md:text-xl font-extrabold text-slate-900">
              All Suggested Friends
            </h1>
          </div>
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-600 flex">
            {suggestions.length}
          </span>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {isLoading ? (
            <>
              {[1, 2, 3, 4, 5, 6].map(() => (
                <SuggestionCardLoader />
              ))}
            </>
          ) : (
            <>
              {suggestions.length === 0 ? (
                <div className="col-span-2 font-bold">
                  <AlertMess mess={"No Suggestions Found"} status={"warning"} />
                </div>
              ) : (
                <>
                  {suggestions.map((suggestion) => (
                    <SuggestedFriendCard
                      key={suggestion._id}
                      suggestion={suggestion}
                    />
                  ))}
                </>
              )}
            </>
          )}
        </div>
        <Button
          disabled={spinnerLoading}
          onClick={increaseCounter}
          className="mt-4 w-full items-center justify-center gap-2 rounded-xl border border-slate-200! bg-slate-50! px-3 py-2 text-sm font-bold text-slate-700! transition hover:bg-slate-100! disabled:opacity-50 inline-flex"
        >
          {spinnerLoading ? (
            <Spinner
              size="sm"
              aria-label="Info spinner example"
              className="me-3"
              light
            />
          ) : (
            <></>
          )}
          Load more users
        </Button>
      </div>
    </section>
  );
}
