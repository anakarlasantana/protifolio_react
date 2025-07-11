import { Stack, Typography, Divider } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next";

interface SectionDividerProps {
    title: string;
    icon: React.ReactNode;
}

export default function SectionDivider({ title, icon }: SectionDividerProps) {
    const isMobileScreen = useMediaQuery('(max-width: 540px)');
    const { t } = useTranslation();

    return (
        <Stack spacing={1} direction={'row'} width={'100%'} alignItems={"center"}>
            <Typography width={'auto'} fontSize={isMobileScreen ? 20 : 32} sx={{
                fontFamily: 'Fira Code',
                textTransform: 'none',
                color: 'white',
                alignItems: 'center',
                display: 'flex',
                gap: 1,
            }}> {icon}{t(title)}</Typography>
            <Stack width={'50%'}>
                <Divider sx={{ backgroundColor: '#42a96d' }} />
            </Stack>
        </Stack>
    )

}