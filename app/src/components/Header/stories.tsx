import Header from '../Header';

const meta = {
  title: 'Header',
  component: Header,
}

export default meta;

export const Default = () => {
  return(
    <Header />
  )
}
Default.storyName = "Header"