import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as AfIcons from 'react-icons/fa'
import * as BsIcons from 'react-icons/bs'

export const SideBarData = [
    {
        title: 'Cadastrar',
        path: '/overview',
        icon: <AfIcons.FaCashRegister />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Alunos',
                path: '/alunos',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Professor',
                path: '/professor',
                icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: 'Turmas',
                path: '/turmas',
                icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: 'Matérias',
                path: '/materias',
                icon: <IoIcons.IoIosPaper />, 
            }
        ]
    },
    {
        title: 'Listas',
        path: '/overview',
        icon: <BsIcons.BsCardChecklist />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Alunos',
                path: '/instituicao/alunos',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Professores',
                path: '/instituicao/professores',
                icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: 'Turmas',
                path: '/instituicao/turmas',
                icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: 'Materias',
                path: '/instituicao/materias',
                icon: <IoIcons.IoIosPaper />, 
            },
        ]
    },
    {
        title: 'Mensagens',
        path: '/',
        icon: <AiIcons.AiFillMessage />,
    }
];

export const SideBarDataProfessor = [
    {
        title: 'Cadastrar',
        path: '/overview',
        icon: <AfIcons.FaCashRegister />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Exercícios',
                path: '/exercicios',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Tarefas',
                path: '/tarefas',
                icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: 'Corrigir tarefas',
                path: '/corrigir_tarefas',
                icon: <IoIcons.IoIosPaper />, 
            }
        ]
    },
    {
        title: 'Listas',
        path: '/overview',
        icon: <BsIcons.BsCardChecklist />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Alunos',
                path: '/instituicao/alunos',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Exercícios',
                path: '/professor/exercicios',
                icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: 'Tarefas',
                path: '/professor/tarefas',
                icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: 'Turmas',
                path: '/instituicao/turmas',
                icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: 'Materias',
                path: '/instituicao/materias',
                icon: <IoIcons.IoIosPaper />, 
            },
        ]
    },
    {
        title: 'Mensagens',
        path: '/',
        icon: <AiIcons.AiFillMessage />,
    }
];

export const SideBarDataAluno = [
    {
        title: 'Realizar',
        path: '/overview',
        icon: <AfIcons.FaCashRegister />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Tarefas',
                path: '/tarefas',
                icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: 'Quiz',
                path: '/quiz',
                icon: <IoIcons.IoIosPaper />, 
            }
        ]
    },
    {
        title: 'Listas',
        path: '/overview',
        icon: <BsIcons.BsCardChecklist />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Tarefas realizadas',
                path: '/aluno/tarefas',
                icon: <IoIcons.IoIosPaper />,
            }
        ]
    },
    {
        title: 'Mensagens',
        path: '/',
        icon: <AiIcons.AiFillMessage />,
    }
]