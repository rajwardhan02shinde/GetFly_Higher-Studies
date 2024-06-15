const upcomingSeminars = [
  {
    id: 1,
    seminarType: "Abroad Studies",
    title: "Opportunities for Higher Education Abroad",
    description:
      "An informative session about studying abroad, covering various universities, scholarship opportunities, and the benefits of obtaining an international degree. Participants will learn about the application processes, required documentation, and timelines for applying to different universities worldwide. This session will provide valuable insights for students planning to study abroad and help them make informed decisions.",
    speaker: "Mr. John Doe, Senior Education Counselor, IDP",
    date: "2024-07-10",
    time: "10:00 AM",
    venue: "Seminar Hall 1",
    organizedBy: "TPO Department, VPPCOE & VA, SION MUMBAI",
    lastDateToApply: "2024-07-05",
  },
  {
    id: 2,
    seminarType: "Abroad Studies",
    title: "Applying to Overseas Universities",
    description:
      "Guidance on application processes for overseas universities, including choosing the right university, understanding the application requirements, and crafting a compelling personal statement. This seminar will also cover tips on obtaining recommendation letters and preparing for interviews, ensuring that students are well-prepared for the entire application process.",
    speaker: "Ms. Jane Smith, Director of Admissions, WorldEdu",
    date: "2024-07-15",
    time: "2:00 PM",
    venue: "Seminar Hall 2",
    organizedBy: "CESA, VPPCOE & VA, SION MUMBAI",
    lastDateToApply: "2024-07-10",
  },
  {
    id: 3,
    seminarType: "Abroad Studies",
    title: "Scholarship Opportunities for International Students",
    description:
      "Detailed insights into various scholarship opportunities and financial aid options available for international students. The seminar will cover different types of scholarships, eligibility criteria, and application processes. Participants will also hear from past scholarship recipients about their experiences and how they managed to secure funding for their studies.",
    speaker: "Mr. Richard Lee, Financial Aid Advisor, Overseas",
    date: "2024-07-20",
    time: "11:00 AM",
    venue: "Seminar Hall 3",
    organizedBy: "ITSA, VPPCOE & VA, SION MUMBAI",
    lastDateToApply: "2024-07-15",
  },
  {
    id: 4,
    seminarType: "Abroad Studies",
    title: "Understanding the Visa Process",
    description:
      "A comprehensive guide to understanding the visa process for international students. This seminar will cover different types of student visas, application procedures, required documentation, and tips for a successful visa interview. Attendees will also learn about post-study work visas and how to navigate the visa process effectively.",
    speaker: "Ms. Emily Johnson, Visa Consultant, IDP",
    date: "2024-07-25",
    time: "3:00 PM",
    venue: "Seminar Hall 1",
    organizedBy: "TPO Department, VPPCOE & VA, SION MUMBAI",
    lastDateToApply: "2024-07-20",
  },
  {
    id: 5,
    seminarType: "Abroad Studies",
    title: "Top Destinations for Higher Education",
    description:
      "An overview of the top destinations for higher education and their unique advantages. This session will explore educational systems, popular courses, living conditions, and cultural aspects of studying in countries like the USA, UK, Canada, Australia, and more. Students will gain valuable insights into choosing the right destination for their studies.",
    speaker: "Dr. Alice Brown, Education Consultant, WorldEdu",
    date: "2024-07-30",
    time: "1:00 PM",
    venue: "Seminar Hall 2",
    organizedBy: "CESA, VPPCOE & VA, SION MUMBAI",
    lastDateToApply: "2024-07-25",
  },
  {
    id: 6,
    seminarType: "M.E / M.Tech Programs",
    title: "Introduction to M.E / M.Tech Programs",
    description:
      "An introduction to M.E / M.Tech programs available in various engineering disciplines. This seminar will cover the curriculum structure, specializations, research opportunities, and the career prospects after completing an M.E / M.Tech degree. Attendees will gain insights into the academic rigor and the skills required for success in these programs.",
    speaker:
      "Dr. Rahul Sharma, Professor, Department of Mechanical Engineering, College of Engineering, Passed: 2000",
    date: "2024-08-01",
    time: "10:00 AM",
    venue: "Seminar Hall 1",
    organizedBy: "TPO Department, VPPCOE & VA, SION MUMBAI",
    lastDateToApply: "2024-07-28",
  },
  {
    id: 7,
    seminarType: "M.E / M.Tech Programs",
    title: "Alumni Experiences in M.E / M.Tech",
    description:
      "Hear from alumni about their experiences and career paths after completing their M.E / M.Tech degrees. This seminar will feature alumni sharing their journey, challenges faced during their studies, and how their postgraduate education has helped them in their professional lives. Attendees will get practical tips and inspiration from successful alumni.",
    speaker:
      "Mr. Arun Kumar, Alumni, Department of Electrical Engineering, College of Technology, Passed: 2015",
    date: "2024-08-05",
    time: "11:00 AM",
    venue: "Lab 2",
    organizedBy: "CESA, VPPCOE & VA, SION MUMBAI",
    lastDateToApply: "2024-07-31",
  },
  {
    id: 8,
    seminarType: "M.E / M.Tech Programs",
    title: "Curriculum and Research in M.E / M.Tech",
    description:
      "A detailed look into the curriculum and research opportunities available in M.E / M.Tech programs. This session will cover core and elective subjects, research methodologies, lab facilities, and the importance of publishing research papers. Attendees will also learn about the support available for research projects and the significance of innovation in engineering.",
    speaker:
      "Dr. Priya Verma, Professor, Department of Computer Science, Technical University, Passed: 2005",
    date: "2024-08-10",
    time: "2:00 PM",
    venue: "Seminar Hall 3",
    organizedBy: "ITSA, VPPCOE & VA, SION MUMBAI",
    lastDateToApply: "2024-08-05",
  },
  {
    id: 9,
    seminarType: "M.E / M.Tech Programs",
    title: "Admission Process for M.E / M.Tech",
    description:
      "An in-depth guide to the admission process for M.E / M.Tech programs. This seminar will cover application requirements, entrance exams, selection criteria, and important deadlines. Attendees will get tips on preparing a strong application and performing well in interviews, ensuring they have the best chance of securing a place in their desired program.",
    speaker:
      "Dr. Suresh Patil, Professor, Department of Civil Engineering, National Institute of Technology, Passed: 1998",
    date: "2024-08-15",
    time: "1:00 PM",
    venue: "Seminar Hall 2",
    organizedBy: "TPO Department, VPPCOE & VA, SION MUMBAI",
    lastDateToApply: "2024-08-10",
  },
  {
    id: 10,
    seminarType: "M.E / M.Tech Programs",
    title: "Industry Collaborations in M.E / M.Tech",
    description:
      "Learn about industry collaborations and internship opportunities available during M.E / M.Tech programs. This session will cover how these collaborations enhance learning, provide practical experience, and improve employability. Attendees will hear from students who have benefited from such collaborations and learn how to make the most of these opportunities.",
    speaker:
      "Ms. Anjali Rao, Alumni, Department of Information Technology, University of Science, Passed: 2018",
    date: "2024-08-20",
    time: "3:00 PM",
    venue: "Lab 1",
    organizedBy: "ITSA, VPPCOE & VA, SION MUMBAI",
    lastDateToApply: "2024-08-15",
  },
];
const faqData = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    question: "How do you use React?",
    answer: "You use React by creating components.",
  },
  {
    id: 3,
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension for JavaScript that looks similar to XML or HTML.",
  },
];
export { faqData };
export default upcomingSeminars;
