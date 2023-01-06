import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import "./todoBottomTabs.css"


export default function TodoBottomTabs(props) {

const Tab = styled(TabUnstyled)`
  color: #8c959f;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 7px;
  border: none;
  display: flex;
  justify-content: center;


  &:hover {
    color: black;
  }

  
  &.${tabUnstyledClasses.selected} {
    color: #0072E5;
  }

`;


 


const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  `,
);


const tabLists = ["All", "Active", "Completed"]



        

  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>

       {tabLists.map((tab => {

        return <Tab onClick={()=>props.clicked(tab)}  key={tab}> {tab}</Tab>

       }))}
      </TabsList>
    </TabsUnstyled>
  );
}
