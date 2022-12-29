import Card from "./Card"
import FeedbackData from "./FeedbackData";
import PropTypes from 'prop-types'
import { FaTimes, FaEdit} from 'react-icons/fa'
import { icons } from "react-icons";
import { useContext } from "react";
import FeedbackContext from "./FeedbackContext";

function FeedbackItem({item}) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={()=> deleteFeedback(item.id)} className="close">
        <FaTimes color="purple"/>
      </button>
      <button onClick={()=> editFeedback(item)} className="edit">
        <FaEdit color="purple"/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem;
