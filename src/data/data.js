import { SlSettings } from "react-icons/sl";
import { RiTeamFill } from "react-icons/ri";
import { SlNote } from "react-icons/sl";
import { SlLock } from "react-icons/sl";
import { SlChart } from "react-icons/sl";
import { SiGoogleoptimize } from "react-icons/si";
import React from 'react';

// Skills Data
export const skillsData = [
  {
    id: 1,
    icon: <SlNote />,
    title: "Réaliser un développement d'application",
    des: "Concevoir, coder, tester et intégrer une solution informatique pour un client.",
  },
  {
    id: 2,
    icon: <SiGoogleoptimize />,
    title: "Optimiser des applications informatiques",
    des: "Proposer des applications informatiques optimisées en termes de performance, de sécurité et d'ergonomie.",
  },
  {
    id: 3,
    icon: <SlSettings />,
    title: "Administrer des systèmes informatiques",
    des: "Installer, configurer, mettre à disposition, maintenir des infrastructures et des services informatiques.",
  },
  {
    id: 4,
    icon: <SlLock />,
    title: "Gérer des données de l'information",
    des: "Concevoir, gérer, administrer et exploiter des bases de données.",
  },
  {
    id: 5,
    icon: <SlChart />,
    title: "Conduire un projet",
    des: "Satisfaire les besoins des utilisateurs, organiser et piloter un projet informatique. ",
  },
  {
    id: 6,
    icon: <RiTeamFill />,
    title: "Travailler dans une équipe informatique",
    des: "Acquérir, développer et exploiter les aptitudes nécessaires.",
  },
];
