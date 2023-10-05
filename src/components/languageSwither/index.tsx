import React, { useEffect, useState } from 'react';
import { Stack, IconButton, Select, MenuItem } from '@mui/material';
import br from '../../assets/icons8-brasil-48.png';
import es from '../../assets/icons8-espanha-2-48.png';
import en from '../../assets/icons8-eua-48.png';
import { useTranslation } from 'react-i18next';

export const languageOptions = [
    {
        name: 'Português',
        value: 'pt_Br',
        flag: br,
    },
    {
        name: 'Espanhol',
        value: 'es',
        flag: es,
    },
    {
        name: 'Inglês',
        value: 'en',
        flag: en,
    },
];


export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const handleChangeLanguage = (value: string) => {
        i18n.changeLanguage(value);
        setSelectedLanguage(value);
    };


    return (
        <Select variant='outlined' size='small' value={selectedLanguage} onChange={(e) => handleChangeLanguage(e.target.value)}>
            {languageOptions.map((option) => (
                <MenuItem
                    key={option.value}
                    value={option.value}
                    sx={{ justifyContent: 'center' }}
                >
                    <img width={30} height={30} src={option.flag} alt={option.name} />
                </MenuItem>
            ))}
        </Select>
    );
};