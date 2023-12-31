export default interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    border?: string;
    color?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    radius?: string;
    icon?: React.ReactNode;
  }