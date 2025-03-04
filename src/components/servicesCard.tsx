import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
    width: 100%;
    padding: 2rem;
    background-color: #FFDCCF;
    box-shadow: 0 0px 15px rgba(0, 0, 0, 0.1), inset 0 0px 25px rgba(255, 255, 255, 1);'
`;

const Title = styled.h2`
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    color: #333;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
`;

const Card = styled.div<{ backgroundImage: string }>`
    width: 300px;
    height: 400px;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    position: relative;
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.05);
    }
`;

const CardTitle = styled.h3`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    font-size: 1.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const BackgroundText1 = styled.div`
    position: relative;
    font-size: 9rem;
    font-weight: bold;
    opacity: 0.05;
    top: 1%;
    color: #000;
    z-index: 0;
    pointer-events: none;
    white-space: nowrap;
    overflow: visible;
`;

const BackgroundText2 = styled.div`
    position: relative;
    font-size: 9rem;    font-weight: bold;
    opacity: 0.05;
    bottom: 5%;
    color: #000;
    z-index: 0;
    pointer-events: none;
    white-space: nowrap;
    overflow: visible;
`;

interface ServiceCardProps {
    services: {
        title: string;
        backgroundImage: string;
    }[];
}

const ServicesCard: React.FC<ServiceCardProps> = ({ services }) => {
    return (
        <ServicesContainer>
            <Title>Szolgáltatások</Title>
                <BackgroundText1>NEW HEIGHTS OF WELLNESS NEW HEIGHTS OF WELLNESS NEW HEIGHTS OF WELLNESS</BackgroundText1>
                
            <CardContainer>
                {services.map((service, index) => (
                    <Card key={index} backgroundImage={service.backgroundImage}>
                        <CardTitle>{service.title}</CardTitle>
                    </Card>
                ))}
            </CardContainer>
            <BackgroundText2>NEW HEIGHTS OF WELLNESS NEW HEIGHTS OF WELLNESS NEW HEIGHTS OF WELLNESS</BackgroundText2>
        </ServicesContainer>
    );
};

export default ServicesCard;