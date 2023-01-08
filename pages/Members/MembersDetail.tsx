import Image from "next/image";
import styled from "styled-components";

import { MemberData } from "./Members";

const MembersDetail = (props: {isFirstClicked: boolean, memberData: MemberData}) => {
    if(!props.isFirstClicked){
        return null;
    }

    return (
        <MembersDetailContainer>
            <MembersDetailCompanyContainer>
                <Image alt={"Company Logo"} src={props.memberData.data && props.memberData.data.company_img} width="200" height="200" unoptimized={true} />
            </MembersDetailCompanyContainer>
            {
                props.memberData.data.boj.isEnabled ?
                    <MembersDetailBojContainer>
                        <MembersDetailTitle>Solved. ac</MembersDetailTitle>
                        <Image alt={"BOJ Badge"} src={`https://mazassumnida.wtf/api/v2/generate_badge?boj=${props.memberData.data && props.memberData.data.boj.username}`} width="350" height="175" unoptimized={true} />
                    </MembersDetailBojContainer>
                : null
            }
            <MembersDetailHistoryContainer>
                <MembersDetailTitle>History</MembersDetailTitle>
                {
                    props.memberData.data && props.memberData.data.history.map((item) => {
                        return <MemberDetailHistoryItem key={item.content} historyData={item} />
                    })
                }
            </MembersDetailHistoryContainer>
        </MembersDetailContainer>
    );
};

const MemberDetailHistoryItem = (props: {historyData: {content: string, date: string}}) => {
    return(
        <MembersDetailHistoryItemContainer>
            <MembersDetailHistoryDate>{props.historyData.date}</MembersDetailHistoryDate>
            <MembersDetailHistoryContent>{props.historyData.content}</MembersDetailHistoryContent>
        </MembersDetailHistoryItemContainer>
    )
}

const MembersDetailContainer = styled.div`
    height: 100%;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 30px 0 100px 0;
`;

const MembersDetailBojContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 15px 0;
`;

const MembersDetailCompanyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 15px 0;
`;

const MembersDetailHistoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 15px 0;
`;

const MembersDetailHistoryItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  
    margin: 0 0 30px 0;
`;

const MembersDetailHistoryContent = styled.p`
    font-size: 20px;
    font-weight: 300;
`;

const MembersDetailHistoryDate = styled.p`
    font-size: 24px;
    font-weight: 700;
`;

const MembersDetailTitle = styled.p`
    font-size: 36px;
    font-weight: 700;
    line-height: 50px;
  
    margin: 0 0 15px 0;
`;

export default MembersDetail;