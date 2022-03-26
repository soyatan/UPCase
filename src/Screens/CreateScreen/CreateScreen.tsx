import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Category, Nav} from '../../Types/Types';
import styles from './styles';
import InputComponent from './../../components/InputComponent/InputComponent';
import CategoriesContainer from '../../components/CategoriesContainer/CategoriesContainer';
import {
  capitalizeTheFirstLetterOfEachWord,
  validateProductTitle,
  validatePrice,
  validateImageLink,
  validateDescription,
  createProductAndPost,
} from './../../Helper/functions';
import Button from './../../components/Button/Button';

interface CreateScreenProps {
  navigation: Nav;
}

const CreateScreen = ({navigation}: CreateScreenProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [imageLink, setImageLink] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('0');
  const [selectedCategoryName, setselectedCategoryName] = useState<any>(null);
  const [errorMessage, seterrorMessage] = useState<string>('');
  const [isValidFields, setisValidFields] = useState({
    title: true,
    category: false,
    price: true,
    imageLink: true,
    description: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await fetch(
        'https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories',
      );
      const json = await data.json();
      setCategories(json);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const getCategoryName = () => {
      if (selectedCategory === '0') {
        seterrorMessage('Please Select a Product Category');
        return;
      } else {
        categories.find(item => {
          if (item.id === selectedCategory) {
            setselectedCategoryName(item.name);
            if (!isValidFields.category) {
              setisValidFields({...isValidFields, category: true});
              seterrorMessage('');
            }
          }
        });
      }
    };
    getCategoryName();
  }, [selectedCategory]);

  const checkTitle = () => {
    const {isValid, error} = validateProductTitle(title);
    setisValidFields({...isValidFields, title: isValid});
    seterrorMessage(error);
  };
  const checkPrice = () => {
    const {isValid, error} = validatePrice(price);
    setisValidFields({...isValidFields, price: isValid});
    seterrorMessage(error);
  };
  const checkImageLink = () => {
    const {isValid, error} = validateImageLink(imageLink);
    setisValidFields({...isValidFields, imageLink: isValid});
    seterrorMessage(error);
  };
  const checkDescription = () => {
    const {isValid, error} = validateDescription(description);
    setisValidFields({...isValidFields, description: isValid});
    seterrorMessage(error);
  };
  const submitProduct = async () => {
    const response = await createProductAndPost(
      title,
      selectedCategoryName,
      imageLink,
      +price,
      description,
    );
    if (response) {
      navigation.navigate('Home');
    }
  };
  const canCreateProduct = () => {
    if (
      !title ||
      !selectedCategoryName ||
      !imageLink ||
      !price ||
      !description
    ) {
      seterrorMessage('Please fill all required fields');
    } else if (errorMessage) {
      return;
    } else if (Object.values(isValidFields).includes(false)) {
      seterrorMessage('Please fill all required product information');
      return;
    } else {
      setIsSubmitting(true);
      submitProduct();
    }
  };

  return (
    <View style={styles.container}>
      {isSubmitting ? (
        <ActivityIndicator
          style={styles.indicator}
          size="large"
          color="#00ff00"
        />
      ) : null}

      <InputComponent
        placeholder={'Product Title'}
        value={title}
        onChangeText={setTitle}
        onEndEditing={checkTitle}
      />
      <InputComponent
        placeholder={'Price'}
        value={price.toString()}
        onChangeText={setPrice}
        numeric
        onEndEditing={checkPrice}
      />
      <InputComponent
        placeholder={'Description'}
        multiline
        value={description}
        onChangeText={setDescription}
        onEndEditing={checkDescription}
      />
      <InputComponent
        placeholder={'Image Link'}
        value={imageLink}
        onChangeText={setImageLink}
        onEndEditing={checkImageLink}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      {categories ? (
        <>
          <Text style={styles.text}>
            Selected Category:
            {selectedCategoryName
              ? ` ${capitalizeTheFirstLetterOfEachWord(selectedCategoryName)}`
              : null}
          </Text>
          <CategoriesContainer
            categories={categories}
            state={selectedCategory}
            onPress={setSelectedCategory}
          />
        </>
      ) : null}
      <View style={styles.buttonContainer}>
        <Button
          title={'Add Product'}
          color={'Red'}
          onPress={
            !isSubmitting ? canCreateProduct : () => console.log('Please wait')
          }
        />
        <Button
          title={'Cancel'}
          color={'Gray'}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default CreateScreen;
