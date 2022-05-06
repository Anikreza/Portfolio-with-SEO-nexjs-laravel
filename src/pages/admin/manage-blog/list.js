import React from "react"
import AppLayout from "@/components/Layouts/AppLayout"
import GridContainer from "@/components/Grid/GridContainer"
import GridItem from "@/components/Grid/GridItem"
import Card from "@/components/Card/Card"
import CardHeader from "@/components/Card/CardHeader"
import CardBody from "@/components/Card/CardBody"
import Table from "@/components/Table/Table"
import {makeStyles} from "@material-ui/core/styles"
import {Button} from "@mui/material"
import styles from "@/assets/jss/nextjs-material-dashboard/views/dashboardStyle"
import {useRouter} from "next/router"

const BlogList = () => {

    const useStyles = makeStyles(styles)
    const classes = useStyles()
    const router=useRouter()

    return (
        <AppLayout>
            <div className='dashboardContainer'>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="dark">
                                <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
                                <p className={classes.cardCategoryWhite}>
                                    New employees on 15th September, 2016
                                </p>
                            </CardHeader>
                            <CardBody>
                                <Button
                                    color={'inherit'}
                                    variant="contained"
                                    onClick={()=>router.push({pathname:'create-new'})}
                                >
                                    Create New
                                </Button>
                                <Table
                                    tableHeaderColor="gray"
                                    tableHead={["ID", "Name", "Salary", "Country"]}
                                    tableData={[
                                        ["1", "Dakota Rice", "$36,738", "Niger"],
                                        ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                                        ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                                        ["4", "Philip Chaney", "$38,735", "Korea, South"],
                                    ]}
                                />
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        </AppLayout>
    )
}

export default BlogList