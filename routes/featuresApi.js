var knex = require("../db/knex");

module.exports = app => {
  app.get("/listData", (req, res) => { //this route is for our front-end to get a list of the data, where we will display almost everything
    knex("idea")
    .innerJoin("category", "idea.categoryid", "category.id")
    .innerJoin("memberidea", "idea.id", "memberidea.ideaid")
    .innerJoin("member", "memberidea.memberid", "member.id")
    .fullOuterJoin("comment", "idea.id", "comment.ideaid")  // if no comment then it will show "no comment" in the front-end
    .select(
      "idea.id",
      "idea.title",
      "idea.description",
      "member.username",
      "member.id as memberid",
      "idea.budget",
      "idea.peopleNeeded",
      "idea.isReadyForComments",
      "category.name",
      "idea.creationDate",
      "idea.lastModified",
      knex.raw("ARRAY_AGG(comment.commentline) as comments") //to make the comment an arry,so that we can append new comments to it.
    )
    .groupBy("idea.id", "member.id", "category.name")
    .orderBy("idea.id")
    .then(data => {
      res.send(data);
    });
  });

  app.get("/listData/:id", (req, res) => { //this route is for the edit function in the front-end
    knex.select(                      //so that it returns the ideas of which we are editting.
      "idea.id",
      "idea.title",
      "idea.description",
      "member.id as memberid",
      "member.username",
      "idea.categoryid",
      "idea.budget",
      "idea.peopleNeeded",
      "idea.isReadyForComments",
      "category.name",
      "idea.creationDate",
      "idea.lastModified",
      knex.raw("ARRAY_AGG(comment.commentline) as comments") //to make the comment an arry,so that we can append new comments to it.
    )
    .groupBy("idea.id", "member.id", "category.name")
    .orderBy("idea.id")
    .from("idea")
    .where("idea.id", req.params.id)
    .innerJoin("category", "idea.categoryid", "category.id")
    .innerJoin("memberidea", "idea.id", "memberidea.ideaid")
    .innerJoin("member", "memberidea.memberid", "member.id")
    .fullOuterJoin("comment", "idea.id", "comment.ideaid")
    .then(data => {
      res.send(data);
    });
  });

  app.post("/idea", (req, res) => {
    knex("idea")  //insert data to table idea, with a form in the client.
    .insert({
      title: req.body.title,
      description: req.body.description,
      budget: req.body.budget,
      isReadyForComments: req.body.isReadyForComments,
      peopleNeeded: req.body.peopleNeeded,
      categoryid: req.body.categoryid
    })
    .returning("id") // after insert, the database generate id for the data we just created
    .then(function(response) {  //this function will use that id, to insert new value to another table right after.
      return knex("memberidea").insert({  //cool stuff,right?
        memberid: req.body.memberid,
        ideaid: response[0]
      });
    })
    .then(function() {
      console.log("success");
    });
  });

  app.put("/idea/:id", (req, res) => {   //in accordance to the eidt function in front end
    knex("idea")
    .where("id", req.params.id)
    .update({
      title: req.body.title,
      description: req.body.description,
      budget: req.body.budget,
      isReadyForComments: req.body.isReadyForComments,
      peopleNeeded: req.body.peopleNeeded,
      categoryid: req.body.categoryid
    })
    .then(function(response) {    //becasue memberid belongs to another table. this will make another update request to update memeberidea.
      return knex("memberidea")
      .update({
        memberid: req.body.memberid  //refers to the idea owner in front end.
      })
      .where("ideaid", req.params.id);
    })
    .then(function() {
      console.log("success");
    });
  });

  app.delete("/idea/:id", (req, res) => {
    knex("idea")
    .where("id", req.params.id)
    .del()
    .then(() => {
      knex
      .select()
      .from("idea")
      .then(data => {
        res.send(data);
      });
    });
  });

  app.post("/comment/:id", (req, res) => {   //append new comments to the specific idea.
    knex("comment")
    .insert({
      ideaid: req.params.id,
      commentline: req.body.commentline
    })
    .then(() => {
      knex
      .select()
      .from("comment")
      .then(data => {
        res.send(data);
      });
    });
  });
};
