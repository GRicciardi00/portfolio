import { useTheme } from "next-themes";

const Timeline = () => {
  const { theme } = useTheme();

  const events = [
    { date: "2019", place: "Parma, Italy 🇮🇹", description: "Commenced studies in Computer, Electronic, and Telecommunication Engineering Bachelor's program at Università degli studi di Parma" },
    { date: "2021", place: "Valencia, Spain 🇪🇸", description: "Participated in an Erasmus semester at Universitat Politecnica de Valencia" },
    { date: "2022", place: "Parma, Italy 🇮🇹", description: "Enrolled in the Computer Engineering Master's program at Università degli studi di Parma" },
    { date: "2023", place: "Paris, France 🇫🇷", description: "Began studies in Mechatronics, Artificial Vision, and Artificial Intelligence M2 program at Université Paris Saclay" },
    { date: "2024", place: "Vallauris, France 🇫🇷", description: "Joined Oticon Medical as a Computer Vision intern" },
];
  return (
    <div className={`timeline ${theme === "dark" ? "dark" : ""}`}>
      {events.map((event, index) => (
        <div className="timeline-item" key={index}>
          <div className="info">
            <div className="date">{event.date}</div>
            <div className="place">{event.place}</div>
          </div>
          <div className="description">{event.description}</div>
        </div>
      ))}
      <style jsx>{`
        .timeline {
          position: relative;
          margin: 0 auto;
        }

        .timeline:before {
          content: "";
          position: absolute;
          top: 2%;
          bottom: 0;
          left: 5%;
          width: 2px;
          background-color: ${theme === "dark" ? "#fff" : "var(--timeline-date-color, #333)"};
        }

        .timeline-item {
          margin-left: 5%; /* Adjust the left margin */
          margin-right: 10%; /* Adjust the right margin */
          padding: 15px;
          position: relative;
          display: flex; /* Add display flex to align items horizontally */
          flex-direction: column; /* Arrange items in a column */
        }
        .timeline-content {
          display: inline-block; /* Change display to inline-block */
          background-color: ${theme === "dark" ? "var(--timeline-item-background-color-dark, #333)" : "var(--timeline-item-background-color, #f9f9f9)"}; /* Default item background color */
          border-radius: 5px;
          padding: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .info {
          margin-bottom: 10px; /* Add margin between date/place and description */
        }

        .date {
          font-weight: bold;
          color: ${theme === "dark" ? "#fff" : "var(--timeline-date-color, #333)"};
        }

        .place {
          color: ${theme === "dark" ? "#ccc" : "var(--timeline-place-color, #666)"};
        }

        .description {
          display: inline-block;
          background-color: ${theme === "dark" ? "var(--timeline-item-background-color-dark, #333)" : "var(--timeline-item-background-color, #f9f9f9)"}; /* Default item background color */
          border-radius: 5px;
          padding: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          width: fit-content
        }

        .dark .timeline:before {
          background-color: var(--timeline-line-color-dark, #666);
        }

        .dark .description {
          display: inline-block; 
          color: var(--timeline-text-color-dark, #fff);
        }
      `}</style>
    </div>
  );
};

export default Timeline;
