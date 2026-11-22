import { Button } from "flowbite-react";
import SuggestedFriendCard from "../../../suggestions/components/Suggested-Friend-Card/SuggestedFriendCard";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../../../shared/consts/Constants";
import SuggestionCardLoader from "../../../../../shared/skeletons/suggestions/Suggestion-Card-Loader/SuggestionCardLoader";
import AlertMess from "../../../../../shared/components/Alert-Mess/AlertMess";

export default function SuggestedFriends() {
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function navigateToSuggestions() {
    navigate("/system/suggestions");
  }

  async function getSuggestions() {
    setIsLoading(true);
    try {
      const result = await axios.request({
        method: "GET",
        url: `${API_URL}/users/suggestions?limit=10`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token_")}`,
        },
      });
      setSuggestions(result.data.data.suggestions);
    } catch (error) {
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    function callApi() {
      getSuggestions();
    }

    callApi();
  }, []);

  return (
    <div className="p-2.5 rounded-xl bg-white shadow font-bold h-fit sticky! top-18 z-10">
      <h2 className="font-bold text-[16px] text-black flex justify-between items-center mb-4">
        <span>
          <i className="fa-solid fa-users text-fg-brand me-1"></i> Suggested
          Friends
        </span>
        <span className="size-5 justify-center items-center rounded-[50%] bg-gray-200 text-gray-500 text-[12px] flex">
          {suggestions.length}
        </span>
      </h2>

      <div className="h-80 xl:h-120 scrollbar-none overflow-y-auto">
        {isLoading ? (
          <>
            {[1, 2, 3, 4, 5].map(() => (
              <SuggestionCardLoader />
            ))}
          </>
        ) : (
          <>
            {suggestions.length === 0 ? (
              <>
                <AlertMess mess={"No Suggestions Found"} status={"warning"} />
              </>
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

      <div className="mt-4 pt-4">
        <Button
          onClick={navigateToSuggestions}
          className="hover:bg-slate-100! w-full! border! border-slate-200! bg-slate-50! text-slate-600! font-bold!"
        >
          View More
        </Button>
      </div>
    </div>
  );
}
