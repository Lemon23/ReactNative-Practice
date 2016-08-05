'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchAbleHighlight,
  ActivityIndicatorIOS
} from 'react-native';

import BookDetail from './BookDetail';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    thumbnail: {
        width: 53,
        height: 81,
        marginRight: 10
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    author: {
        color: '#656565'
    },
    separator: {
        height: 1,
        backgroundColor: '#ddd'
    },
    listView: {
        backgroundColor: '#f5f'
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

var REQUEST_URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction%27';

class BookList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL).then((response) => response.json()).then((responseData) => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseData.items),
                isLoading: false
            });
        }).done()
    }

    renderBook(book) {
        return (
            <TouchAbleHighlight onPress={() => this.showBookDetail(book)} underlayColor='#ddd'>
                <View>
                    <View style={styles.container}>
                        <Image source={{uri: book.volumeInfo.imageLinks.thumbnail}} style={styles.thumbnail} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{book.volumeInfo.title}</Text>
                            <Text style={styles.author}>{book.volumeInfo.authors}</Text>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchAbleHighlight>           
        );
    }

    showBookDetail(book) {
        this.props.navigator.push({
            title: book.volumeInfo.title,
            component: BookDetail,
            passProps: {book}
        });
    }

    renderLoadingView() {
        return (
            <View style={styles.loading}>
                <ActivityIndicatorIOS size='large' />
                <Text>正在加载中.....</Text>
            </View>
        );
    }

    render() {
        if(this.state.isLoading) {
            return this.renderLoadingView();
        }
        return (
            <ListView dataSource={this.state.dataSource} renderRow={this.renderBook.bind(this)} style={styles.listView} />
        );
    }
}

module.exports = BookList;
