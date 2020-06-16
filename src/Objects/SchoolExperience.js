/**
 * File: SchoolExperience.js
 * 
 * Create a class SchoolExperience to create objects witht the following properties:
 *      degree: type of certificate recieved (String)
 *      degreeField: field studied for degree(String)
 *      degreeRecieved: date when certificate was recieved(String)
 *      university: name of university(String)
 *      location: location of university(String)
 *      relaventCourses: array of courses taken relavent to degreeField(String)
 * 
 * Create an array SchoolExperiences to hold multiple SchoolExperience objects
 * 
 * Send SchoolExperiences to a component calling it
 */

class SchoolExperience{
    constructor(degree, degreeField, degreeRecieved, university, location, relaventCourses){
        this.degree = degree;
        this.degreeField = degreeField;
        this.degreeRecieved = degreeRecieved;
        this.university = university;
        this.location = location;
        this.relaventCourses = relaventCourses;
    }
}

const SchoolExperiences = [
    new SchoolExperience("Bachelors Degree", "Computer Science", "In Progress", "Western Governors University‎", "Salt Lake City, Utah", null),
    new SchoolExperience("Associates Degree", " Information & Technology, Programming", "December 2019", "Howard Community College", "Columbia, MD", [
        "CMSY-181 Introduction to C++ Programming",
        "CMSY-219 Operating Systems",
        "CMSY-172 Programming JavaScript",
        "CMSY-166 Java I",
        "CMSY-156 Intro to Python",
        "CMSY-167 Java II",
        "CMSY-205 Advanced JavaScript",
        "CMSY-281 Advanced C++ Programming"
    ]),
    new SchoolExperience("High School Diploma", "General", "May 2015", "Howard High School", "Ellicott City, MD", null)
];

export default SchoolExperiences;