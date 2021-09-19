import { Container, Typography } from "@mui/material";

interface LayoutProps {
  title: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <Container sx={{ mt: "80px", mb: 2 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        {title}
      </Typography>
      {children}
    </Container>
  );
};
