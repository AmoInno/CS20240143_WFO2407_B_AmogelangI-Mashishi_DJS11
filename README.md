🎵 PODCAST APP | PORTFOLIO PIECE 💿
[DJS11] Starter Instructions for the Final Portfolio Piece Submission 🚀

Table of Contents

🤖 Technology
📦Data
Relationships
Endpoints
Genre Titles
🧑 User Stories
🤖 Technology
You will be required to complete this project using React and a build-process to manage all the complexity involved.

You are welcome to use any other technology that you are comfortable with as well as React. It is recommended that you use TypeScript as well, however you are welcome to avoid TypeScript entirely if you do not feel comfortable with it’s usage just yet.

 [My App](https://chatterchat-podcasts.netlify.app)

📦Data
Data consists of three basic semantic units

SHOW: A specific podcast that contains a single or several SEASON
SEASON: A collection of EPISODE released across a specific timespan
EPISODE: Corresponds to a specific MP3 file that user can listen
However, the following information is also exposed via the API

PREVIEW: A summarised version of a SHOW that only contains basic information. Usually exposed when an array of different SHOW information is requested.
GENRE: Information related to a (one of many) genres that can be assigned to a SHOW
Relationships
The following chart indicates the relations between units of data. It uses Entity Relationship mapping. In order to understand the meaning of symbols in the chart please read the overview on the Mermaid.js documentation.

Endpoints
Data can be called via a fetch request to the following three endpoints. Note that there is not always a one-to-one mapping between endpoints and actual data structures. Also note that <ID> indicates where the dynamic ID for the requested item should be placed. For example: [https://podcast-api.netlify.app/genre/3](https://podcast-api.netlify.app/genre/3)

# URL
https://podcast-api.netlify.app Returns an array of PREVIEW
https://podcast-api.netlify.app/genre/<ID> Returns a GENRE object
https://podcast-api.netlify.app/id/<ID> Returns a SHOW object with several SEASON and EPISODE objects directly embedded within
Genre Titles
Since genre information is only exposed on PREVIEW by means of the specific GENRE id, it is recommended that you include the mapping between genre id values and title in your code itself:

# ID Title
1 Personal Growth
2 Investigative Journalism
3 History
4 Comedy
5 Entertainment
6 Business
7 Fiction
8 News
9 Kids and Family
🧑 User Stories
Please refer to the DJS rubric found in your dashboard spreadsheet for more detail.
