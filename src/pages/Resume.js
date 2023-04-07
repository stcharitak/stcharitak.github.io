import React from "react";
import ResumePageTitle from "../components/ResumePageTitle";
import BlockTitle from "../components/BlockTitle";
import Timeline from "../components/Timeline";
import CertificateItem from "../components/CertificateItem";
import Clearfix from "../components/Clearfix";
import InfoBlock from "../components/InfoBlock";
import { v4 as uuidv4 } from "uuid";
import SkillList from "../components/SkillList";

export default function ResumePage() {
  const JOBS = [
    {
      columns: "clearfix",
      from: "2018",
      to: "2022",
      organization: "24metrics GmbH",
      organization_url: "https:24metrics.com",
      title: "Software Engineer",
      options: [
        {
          __html: "Lead Engineer for one of the main projects of the company",
        },
        {
          __html:
            "Maintaining and releasing new features for a Laravel aplication, AngularJS frontend, MySQL, ElasticSearch, Redis, RabbitMQ, CircleCI, with everything deployed initially in AWS and later in GCP",
        },
        {
          __html: "Implementing various tools and micro-services using Go",
        },
        {
          __html: "Technical Support",
        },
      ],
    },
    {
      columns: "clearfix",
      from: "2017",
      to: "2018",
      organization: "Greek Army",
      organization_url: "https://seap.army.gr/",
      title: "Network Technician",
      options: [
        {
          __html:
            "Installation, Configuration and Management of Microsoft Windows Server",
        },
        {
          __html: "Troubleshooting and repairing computer and network systems",
        },
        {
          __html:
            "Designing and Implementing personnel management applications using PHP framework Laravel",
        },
      ],
    },
    {
      columns: "clearfix",
      from: "2016",
      to: "2017",
      organization: "Sintagoulis Plc",
      organization_url: "https:sintagoulis.gr",
      title: "Fullstack Developer",
      options: [
        {
          __html:
            "Developing and Maintaining dynamic search engine machine platform for aggregating and delivering cooking recipes, using PHP, Smarty Template Engine, MySQL, HTML, CSS (Bootstrap, Materialize), JavaScript/JQuery/Ajax, JSON technologies <a href='https://www.sintagoulis.gr' target='_blank' >(https://www.sintagoulis.gr)</a >",
        },
        {
          __html:
            "Developing Mobile application for Android and iOS using PhoneGap framework",
        },
        {
          __html:
            "Implementing algorithms for 'smart' search and categorization using neural network concepts",
        },
      ],
    },
    {
      columns: "clearfix",
      from: "2016",
      to: "2018",
      organization: "Technological Educational Institute of Crete, NiLE Lab",
      organization_url: "https://nile.hmu.gr/",
      title: "Research Assistant",
      options: [
        {
          __html:
            "Teacher Assistant: Laboratory for 'Object Oriented Programming with Java', undergraduate course",
        },
        {
          __html:
            "Participating in the Design and implementation of Serious Games",
        },
        {
          __html:
            "Participating in the European project <a href='http://bodymindacademy.eu' target='_blank' >'Body and Mind'</a >",
        },
        {
          __html: "Supporting undergraduate and postgraduate students",
        },
        {
          __html:
            "Conference Assistant at 'ArtsIT, Interactive and Game Creation' and 'Design Learning & Innovation'",
        },
      ],
    },
    {
      columns: "clearfix",
      from: "2014",
      to: "2014",
      organization: "Entranet Ltd",
      organization_url: "https://entranetinc.com/",
      title: "Junior Software Engineer - Internship",
      options: [
        {
          __html:
            "Assisting in updating voice recognition corporate software using Java",
        },
        {
          __html: "Upgrading the corporate website",
        },
        {
          __html: "Content Management of e-platforms using CMS Drupal",
        },
      ],
    },
  ];

  const SCHOOLS = [
    {
      columns: "col-sm-6",
      from: "2015",
      to: "2017",
      organization: "Hellenic Mediterranean University",
      organization_url: "https://hmu.gr/en/",
      title: "Master of Science",
      description: "Informatics & Multimedia",
      options: [
        {
          __html: "Grade: 9.6/10 'Excellent'",
        },
        {
          __html:
            "Dissertation: Design and Development of effective and customizable serious game platform based on learning profile",
        },
      ],
    },
    {
      columns: "col-sm-6",
      from: "2009",
      to: "2014",
      organization: "University of Macedonia",
      organization_url: "https://www.uom.gr/en",
      title: "Bachelor of Science",
      description: "Applied Informatics",
      options: [
        {
          __html: "Grade: 7.17/10 'Very Good'",
        },
        {
          __html:
            "Dissertation: Design and Development of hotel reservation system",
        },
      ],
    },
  ];

  const LANGUAGES = [
    {
      image: "./img/greece.png",
      title: "Greek",
      id: "Mother tongue",
    },
    {
      image: "./img/united-kingdom.png",
      title: "English",
      id: "C2",
    },
    {
      image: "./img/germany.png",
      title: "German",
      id: "C1",
    },
  ];
  return (
    <>
      <ResumePageTitle />
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <BlockTitle title="Experience" />
          <Timeline columns="clearfix" items={JOBS} />
          <BlockTitle title="Education" />
          <Timeline columns="row" items={SCHOOLS} />
          <BlockTitle title="Languages" />
          <div className="row">
            {LANGUAGES.map((language) => (
              <CertificateItem key={uuidv4()} item={language} />
            ))}
          </div>
          <Clearfix />
          <BlockTitle title="Publications" />
          <div className="row">
            <InfoBlock
              columns="col-6"
              icon="linecons-pen"
              description="Nikolas Vidakis and
            <strong>Stavros Charitakis</strong>. (2018).
            Designing the Learning Process: The IOLAOS Platform.
            In Proceedings of the 10th International Conference
            on Subject-Oriented Business Process Management, Christian Stary (Ed.). ACM, New
            York, NY, USA, Article 15, 11 pages"
            />
            <InfoBlock
              columns="col-6"
              icon="linecons-pen"
              description="Papadokostaki K, <strong>Charitakis S</strong>, et
            al. (2017) News Articles Platform: Semantic Tools
            and Services for Aggregating and Exploring News
            Articles. In: Kavoura A., Sakas D., Tomaras P. (eds)
            Strategic Innovative Marketing. Springer Proceedings
            in Business and Economics, pages 511-519"
            />
          </div>
          <Clearfix />
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <BlockTitle title="Coding Skills" />
              <SkillList
                items={[
                  "PHP",
                  "Laravel",
                  "Golang",
                  "Java",
                  "JavaScript",
                  "AngularJS",
                  "React",
                  "HTML / CSS",
                  "PhoneGap",
                  "Unity 3D Game Engine",
                ]}
              />
            </div>
            <div className="col-xs-12 col-sm-4">
              <BlockTitle title="Database Tools" />
              <SkillList
                items={[
                  "MySQL",
                  "MongoDB",
                  "ElasticSearch",
                  "Redis",
                  "Clickhouse",
                ]}
              />
            </div>
            <div className="col-xs-12 col-sm-4">
              <BlockTitle title="Other Technologies" />
              <SkillList
                items={[
                  "Git",
                  "Containers (Docker)",
                  "Kubernetes",
                  "CI (CircleCI, Jenkins)",
                  "AWS",
                  "GCP",
                  "Composer",
                  "API Development",
                  "Unit & Functional Tests",
                  "Unity 3D Game Engine",
                  "LMS (Moodle)",
                  "Authoring Tools (H5P, Adapt, Xerte)",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
