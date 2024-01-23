import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import Pagination from "./Paginaion";
import { motion } from "framer-motion";
import Loading from "./Loading";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
  Spinner,
} from "@material-tailwind/react";

const API_URL = "https://yassine-backend-test1.adaptable.app";

function HomePage() {
  const [recipe, setRecipe] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activecuisin, setActivecuisine] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const getAllRecipe = () => {
    axios
      .get(API_URL + "/recipe")
      .then((response) => {
        setRecipe(response.data);
        setFiltered(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error getting recipe from the API...");
        console.log(error);
      });
  };

  useEffect(() => {
    searchTerm
      ? setFiltered(
          recipe.filter((element) =>
            element.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      : setFiltered(recipe);
  }, [searchTerm]);

  useEffect(() => {
    getAllRecipe();
  }, []);
  if (loading) {
    return (
      <div className="d-flex items-center justify-center">
      <Spinner className="d-flex items-center justify-center h-16 w-16 text-gray-900/50" />
      </div>
    );
  }
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filtered.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="grid justify-items-center mb-5 mt-3">
        <h1 className=" text-5xl font-serif">Recipe Finder</h1>
      </div>
      <SearchBar
        className="justify-center inline-flex flex-wrap  items-cente"
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />

      <div >
        <Filter
          recipe={recipe}
          setFiltered={setFiltered}
          activeCuisin={activecuisin}
          setActivecuisin={setActivecuisine}
        />
        <motion.div
          layout
          className="group mt-8 justify-center inline-flex flex-wrap items-center gap-5 "
        >
          {currentPosts.map((rcp, k) => {
            return (
              
              <Card className=" w-full max-w-[25rem] max-h-[30rem] rounded-3xl shadow-xl transition duration-500 hover:scale-105">
                <CardHeader floated={false} color="blue-gray">
                  <div className="w-full h-56 bg-gray-200 rounded-md overflow-hidden bject-cover hover:opacity-75 lg:h-72 xl:h-80">
                    <Link to={`/recipe/${rcp.id}`}>
                      <img
                        src={rcp.image}
                        alt="Image not found"
                        className="mb-3 w-full h-full object-center object-cover"
                      />
                    </Link>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className=" flex items-center justify-between">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="font-medium"
                    >
                      {rcp.name}
                    </Typography>
                  </div>
                  <Typography color="gray">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                      {rcp.cuisine}
                    </span>
                  </Typography>
                </CardBody>
                <CardFooter className="pt-3">
                  <Link to={`/recipe/${rcp.id}`}>
                    <Button
                      fullWidth={true}
                      className="bg-amber-300 text-gray-900"
                    >
                      Recipe Details
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
             
            );
          })}
        </motion.div>
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filtered.length}
        paginate={paginate}
      />
    </>
  );
}
export default HomePage;
