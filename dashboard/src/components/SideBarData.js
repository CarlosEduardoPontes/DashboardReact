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
]