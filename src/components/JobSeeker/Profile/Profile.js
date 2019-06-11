import React from 'react';

import checkWithAuth from '../../../hoc/checkWithAuth';

import * as theme from '../../../theme';
import { Card, Block, Text, TextArea } from '../../ui';
import ProfileImage from '../ProfileImage';

import profileImg from '../edited.jpg';
import TitleBlock from './TitleBlock';
import EducationBlock from './EducationBlock';


function Profile() {
    return (
        <Block row mt="50px" justify="center" align="center" className="container">
            <Card col="8" pl="30px" pr="30px" mb="15px" pt="30px" pb="30px" rounded={`${theme.sizes.radius}`} >

                <Block row>

                    <Block col="12">
                        <Block row align="center" justify="center">
                            <Block col textalign="center">
                                <ProfileImage imgsrc={profileImg} />
                                <Text variant="h2" mt="10px" mb="5px">Darshaka Lanka</Text>
                                <Text variant="h5">Front End Engineer</Text>
                                <Text variant="h6" mt="20px" color="light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, ducimus neque velit, ipsum voluptas ipsa nesciunt ex accusamus laborum qui, asperiores voluptates perspiciatis facilis sit ad sunt autem numquam molestias.</Text>
                                <TextArea>asasa</TextArea>
                            </Block>
                        </Block>
                    </Block>

                    <Block col="12" mt="60px">
                        <TitleBlock title="Education" onAddClick={() => { alert('add') }}>
                            <EducationBlock
                                degree="Bachelor of Information Technology (BIT)"
                                school="University of Colombo"
                                start="2016"
                                end="2019"
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam consectetur nemo quis earum doloribus quidem ducimus eum, sequi fugiat." />
                        
                        <EducationBlock
                                degree="Bachelor of Information Technology (BIT)"
                                school="University of Colombo"
                                start="2016"
                                end="2019"
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam consectetur nemo quis earum doloribus quidem ducimus eum, sequi fugiat." />
                        
                        </TitleBlock>
                    </Block>

                </Block>
                

            </Card>
        </Block>
    )
}


export default checkWithAuth(Profile);