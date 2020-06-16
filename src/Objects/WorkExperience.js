/**
 * File: WorkExperience.js
 * 
 * Create a class WorkExperience to create objects witht the following properties:
 *      jobTitle: position at work place (String)
 *      company: name of the company (String)
 *      location: location of the company (String)
 *      startDate: start date of position (String)
 *      endDate: end date of position (String)
 *      jobDescription: roles performed at the position(Array of Strings)
 * Create an array WorkExperiences to hold multiple WorkExperience objects
 * 
 * Send WorkExperiences to a component calling it
 */
class WorkExperience{
    constructor(jobTitle, company, location, startDate, endDate, jobDescription){
        this.jobTitle = jobTitle;
        this.company = company;
        this.location = location;
        this.startDate = startDate;
        this.endDate = endDate;
        this.jobDescription = jobDescription;
    }
}

const WorkExperiences = [
    new WorkExperience("Certified Tech Associate", "Staples", "Columbia, MD", "10/2016", "Current", [
        "Approach and greet customers with a positive attitude",
        "Assist customers with information about store products",
        "Assist customers at the point of transaction",
        "Answering questions in regard to computer and printer specifications",
        "Assisting customers with computer issues and discovering a resolution for their issue",
        "Performing screen and battery replacements on select iPhone devices"
    ]),
    new WorkExperience("Seafood Clerk", "Giant Foods", "Columbia, MD", "03/2015", "10/2016", [
        "Provide information on different types of seafood",
        "Assist in preparation of fish through skinning and cutting",
        "Assist in preparation of shrimp, crabs, and lobsters through steaming",
        "Stocking merchandise"
    ]),
    new WorkExperience("Bagger", "Giant Foods", "Columbia, MD", " 12/2014", "03/2015", [
        "Assisted cashiers with organizing a customer's purchase",
        "Assisted customers with finding needed products",
        "Assisted the front end with returning products back to their correct areas"
    ]),
];

export default WorkExperiences;