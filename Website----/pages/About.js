import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center"
          ,
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        Mangaloreans are fond of seafood cooked with a flavoursome South Indian touch, often eaten for lunch. Sea food in Mangalore like prawns and crabs are fried and cooked with delicious masalas, broths, ghee, shredded coconuts and a variety of spicy condiments. Since a greater population of Mangalore is non vegetarian, prawns and crab delicacies are plenty in the city. With close proximity to the sea and fishing harbours, fresh produce is available every day.
        Mangalorean seer fish masala fry is one of those spicy dishes that will definitely make you want to lick your plate clean. The masala paste coating the fish is undertoned with spicy and sour flavours and the fish fried enough to leave its skin crispy. Contrary to the crisp covering, the flesh inside is moist and juicy. This dish bursts with flavours as the spices gives out such a striking aroma and flavour that it is irresistible to one.
        </p>
        <br />
        <p >
          The town of Mangalore has its own version of the country’s most famous delicacy - Biryani. In the city, there are many places which serve different kinds of rice delicacies which includes the Shahi Biryani, Prawn Biryani and the most popular one, Beary Chicken Biryani. It is your usual Dum Biryani with a twist - coconut milk, lots of green chillies, saffron and caramelised onion are added to it apart from the typical ingredients. It is indeed a refreshing take on India’s ever-popular dish, and now we want you to decide if this is the best version of Biryani!
          Korri roti or Chicken curry and fried wafers is another Mangalorean food, although mainstream, yet adding to the traditional street food of Mangalore marking the exclusivity of this cuisine. The chicken curry is generally made from a red chilly base, hence, maybe a little spicier for those accustomed to bland taste buds and perfect for the spice lovers. The roti is different from the usual roti one would speak of. It is a crispy, flattened wafer kind of bread used to dip in the curry and savour.

        </p>
      </Box>
    </Layout>
  );
};

export default About;
